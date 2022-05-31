export function count(phrase: string): Map<string, number> {
  const wordsArray = phrase
    .replace(/  +/g, ' ') //collapse multiple spaces into one
    .trim() //remove leading and trailing whitepsaces
    .toLowerCase()
    .split(/\s/g) // split by whitespace (i.e. spaces, tabs and newlines)

  // Store all words as keys of a map with the word count as value
  return wordsArray.reduce(
    (acc: Map<string, number>, currWord: string): Map<string, number> =>
      acc.set(currWord, (acc.get(currWord) ?? 0) + 1),
    new Map<string, number>()
  )
}
