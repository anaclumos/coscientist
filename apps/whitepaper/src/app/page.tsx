import Link from "next/link";
import { getAllNotes } from "@/lib/notes";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default async function Home() {
  const notes = await getAllNotes();
  
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 flex-1 w-full">
      <h1 className="text-3xl font-semibold mb-4 text-foreground text-balance">Welcome</h1>
      <p className="text-lg text-muted-foreground mb-8 text-pretty">
        This is a documentation site with sliding panes. Click any note to start exploring.
        Links open in new panes to the right, letting you follow rabbit holes while keeping context.
      </p>
      
      <h2 className="text-xl font-medium mb-4 text-foreground text-balance">All Notes</h2>
      <ul className="space-y-2">
        {notes.map((note) => (
          <li key={note.slug}>
            <Link
              href={`/notes/${note.slug}`}
              className="text-primary hover:underline"
            >
              {note.title}
            </Link>
            {note.description && (
              <span className="text-muted-foreground ml-2">— {note.description}</span>
            )}
          </li>
        ))}
      </ul>
      
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>Jump into the connected notes</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-pretty">
            Try starting with{" "}
            <Link href="/notes/index" className="text-primary hover:underline">
              the welcome note
            </Link>{" "}
            or{" "}
            <Link href="/notes/evergreen-notes" className="text-primary hover:underline">
              Evergreen Notes
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
