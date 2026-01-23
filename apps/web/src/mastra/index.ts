import { Mastra } from "@mastra/core"
import { researchAssistantAgent } from "./agents"
import { findCounterevidenceTool } from "./tools/find-counterevidence"
import { suggestEdgeTool } from "./tools/suggest-edges"

export const mastra = new Mastra({
  agents: {
    researchAssistant: researchAssistantAgent,
  },
  tools: {
    findCounterevidence: findCounterevidenceTool,
    suggestEdge: suggestEdgeTool,
  },
})

export default mastra
