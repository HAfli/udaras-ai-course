/* Irish catalogue for the website, keyed by the English source string (see ./lang.ts).
 *   memory.json  Irish carried over from the Session 2/3 course content (same wording as the course materials)
 *   ui.json      interface, components and exercise chrome
 *   pages.json   page text
 *   data.json    course data (sessions, exercises, AI Act, research, story)
 * The status of every entry (native-reviewed / verified / new / needs review) is kept in the internal
 * QA inventory, outside this public repository. */
import memory from './ga/memory.json'
import ui from './ga/ui.json'
import pages from './ga/pages.json'
import data from './ga/data.json'

export const GA: Record<string, string> = { ...memory, ...data, ...pages, ...ui }
