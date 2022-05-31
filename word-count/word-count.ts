export function count(phrase: string): Map<string, number> {
  const wordsArray = phrase
    .replace(/  +/g, ' ') //collapse multiple spaces into one
    .trim() //remove leading and trailing whitepsaces
    .split(/\s/g) // split by whitespace (i.e. spaces, tabs and newlines)

  // Store all words as keys of an object with the word count as value
  const wordObj = wordsArray.reduce(
    (acc: { [key: string]: number }, curr: string): { [key: string]: number } => {
      const currWord = curr.toLowerCase()

      return {
        ...acc,
        [currWord]: Object.prototype.hasOwnProperty.call(acc, currWord) ? acc[currWord] + 1 : 1
      }
    },
    {}
  )

  return new Map(Object.entries(wordObj))
}
