export function isIsogram(word: string): boolean {
  const wordArray = word.toLowerCase().replace(/\W/g, '').split('')

  return new Set(wordArray).size === wordArray.length
}
