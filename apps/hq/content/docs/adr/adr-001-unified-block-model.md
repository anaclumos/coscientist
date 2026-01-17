---
title: "ADR 1: Unified Block Model (Blocks as Universal Knowledge Atoms)"
---

# ADR 1: Unified Block Model (Blocks as Universal Knowledge Atoms)

The platform manages user-contributed knowledge content (text, media, references, etc.) in a highly granular way. We need a content model that treats each piece of knowledge as an atomic unit for easy reuse and linking. Traditional wiki or document systems often treat a whole page or document as the smallest unit, but this system draws inspiration from block-based editors (e.g. Notion, block wikis) where even paragraphs or images are individual units. This **block-based approach** lets us build a graph of knowledge, with rich relationships between small pieces of content.

## Decision

**All content is represented as a "Block" entity in a unified model.** Each Block is a first-class knowledge atom with a unique identifier and type metadata. Text paragraphs, headings, images, files, and even composite documents are all stored as Blocks. Blocks can reference other Blocks or be composed hierarchically (e.g. a document Block containing child Blocks via edges or parent pointers). The blocks are persisted in a single Convex table (e.g. blocks) with a schema like:

- id: Id<"blocks"> – primary key (Convex's object ID).
- type: string – the block type (e.g. "text", "image", "doc", etc.).
- content: any – the content payload. For a text block, this might be a ProseMirror JSON node or plain text; for an image or file block, this could be a reference to file storage ID.
- Metadata fields: e.g. createdBy, createdAt, updatedAt, etc.
- (Optionally) structural fields: e.g. parentId or an order index if we store hierarchy directly. However, hierarchical or semantic relationships are primarily managed by the separate Edges model (see ADR 4).

This decision means **everything that users create or manipulate is a Block**, enabling a uniform API and data handling. A "document" or article is simply a Block of type "doc" that has child Blocks (its paragraphs, images, etc.), which are linked via edges of type "contains" (see ADR 4) or via an array of child IDs in the doc block's content. In MVP, we may implement documents as linear collections of blocks stored in an ordered list, but conceptually they are still blocks containing blocks.

## Rationale

This unified model ensures consistency and flexibility. By treating all content uniformly, we can implement features (versioning, permissions, linking) at the Block level and have them apply to any content type. It also simplifies the collaboration engine – whether users edit a paragraph or an entire page, it's just editing one or multiple Blocks. Furthermore, it facilitates the knowledge graph: blocks are nodes in a graph, which we can connect with typed edges to represent semantic relationships (ADR 4). This is aligned with modern knowledge graph principles where **nodes represent entities and edges represent typed relationships**[[1]](https://shilpathota.medium.com/understanding-knowledge-graphs-for-agentic-ai-7162d018387b). Making every content piece a node (Block) allows rich semantic linking (e.g. a "Claim" block supported by an "Evidence" block via a "supports" edge).

The unified block approach draws inspiration from block-based editors and the idea of _"atomic" knowledge units_. It avoids hardcoding distinctions like "page vs paragraph" – instead, a page is a block that happens to have children. This simplifies the backend: one Convex table and API for all content. It also eases future extension: new content types (code cells, mathematical blocks, etc.) can be added as new block types without altering the fundamental data model.

## Alternatives Considered

- **Page/Document Model:** Treat entire documents or articles as single records (with a large text field). This was simpler for basic editing but lacks granularity – individual ideas or sections could not be linked or versioned independently. It would also complicate collaborative editing on sub-sections.
- **Separate Tables per Content Type:** e.g. a documents table, paragraphs table, images table. This adds complexity and duplication of logic for each type. We preferred a single table with a type field for simplicity and consistency.
- **Embedded Hierarchy in One Document Blob:** Store a whole document's content (with internal blocks) as one JSON structure (as ProseMirror does internally). This would simplify retrieval but make reusing or referencing parts of the content harder. We want Blocks addressable individually (e.g. link to a specific block in another document).
- **Graph Database or RDF Triple Store:** Using a dedicated graph DB or RDF model for all knowledge. This could handle nodes/edges elegantly but introduces additional infrastructure and complexity for the MVP. Instead, we implement a graph model on Convex (storing edges in a table, see ADR 4) which is conceptually similar to the typical SQL approach of nodes and an edges table[[2]](https://shilpathota.medium.com/understanding-knowledge-graphs-for-agentic-ai-7162d018387b#:~:text=,offs) without needing a separate DB.

## Implications

- **Atomic Reuse:** Because everything is a Block, we can support reusing or transcluding a block in multiple contexts. For example, the same "Experiment Result" block could be referenced in two different documents via edges instead of duplicated content. (Full transclusion UI is post-MVP, but the model permits it.)
- **Performance Considerations:** Loading a full document now requires fetching multiple blocks (the container plus its children). Convex doesn't support JOINs, but we can retrieve children by indexing edges or storing child IDs. We'll likely fetch blocks in batches by their IDs. As documents are edited, many small block updates occur instead of one large document update, but Convex's real-time engine can handle frequent small mutations.
- **Consistency and Transactions:** Changes that span multiple blocks (e.g. splitting a paragraph into two blocks) need to be handled carefully in Convex functions to keep data consistent. Convex allows sequential operations in a transaction (single function call), which we'll use to e.g. insert a new block and update an edge or parent reference atomically.
- **Simplified Feature Implementation:** Features like per-block versioning (ADR 2) and per-block permissions (ADR 6) are straightforward because the "block" is the unit of change and access control. However, we must consider that a user viewing a page needs permission for all its constituent blocks – our queries or resolvers must filter out or aggregate permissions accordingly.
- **Uniform API:** We can build generic APIs (e.g. getBlock(id), updateBlock(id, content)) that work for any type of content. Fewer code paths mean fewer bugs. On the flip side, some types (images, files) have very different handling (via file storage in ADR 5), but they still share metadata and ID structure with text blocks.

## Expansion Path

- **New Block Types / Ontologies:** As we extend the system, we can introduce new block types (for example, a "code block" with executable code, or a "chart" block). The ADR decision scales: just add a new type constant and define how its content is structured. The rest of the system (edges, versioning, permissions) already works with it.
- **Federation of Blocks:** In the future, if we allow a federated architecture (multiple servers or instances sharing knowledge), the block model is well-suited to become the unit of federation. Each block can carry a global identifier (possibly a composite of instance + ID) to be referenced across instances. We would need a mechanism to sync or fetch remote blocks on demand in a federated scenario, and a way to resolve conflicts if the same block is edited in different instances (which might entail CRDTs, see ADR 3 Expansion).
- **Block Caching and Local-First:** Because blocks are small, a client could cache frequently used blocks (or even the entire knowledge base if not huge) for offline use, then sync changes to Convex. This leans into a local-first future. Convex's **immutable persistent data structures** (per their whitepaper) could support such workflows, though we are not implementing offline in MVP.
- **Semantic Enrichment:** With every content piece as a block, we can attach semantic data easily. For example, one could tag a block as "hypothesis" or "evidence" via a property, enabling an AI agent to treat blocks differently. This fits the block model and can later be leveraged by agent frameworks or AI (e.g. an agent could retrieve all blocks tagged "research question").
- **Optimized Queries:** As the number of blocks grows, we might introduce indexing or partitioning. For instance, we could partition blocks by project or space to keep query loads manageable. Convex allows creating secondary indexes on table fields; we will likely add an index on parentId or similar to efficiently query a document's blocks. In the future, if some operations require graph traversals, we might consider integrating a graph query library or migrating frequently traversed relationships to a graph-optimized store – but currently Convex + our edges table should suffice.
