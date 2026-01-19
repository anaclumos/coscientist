"use client"

import { createParser, parseAsInteger } from "nuqs"
import {
  buildFullStack,
  getFocusIndex,
  parseStackString,
  popFromStack,
  pushToStack,
  serializeStackArray,
} from "./stack-utils"

export {
  buildFullStack,
  getFocusIndex,
  parseStackString,
  popFromStack,
  pushToStack,
  serializeStackArray,
}

export const stackParser = createParser({
  parse: parseStackString,
  serialize: serializeStackArray,
}).withDefault([])

export const focusParser = parseAsInteger

export const noteStackParsers = {
  stack: stackParser,
  focus: focusParser,
}
