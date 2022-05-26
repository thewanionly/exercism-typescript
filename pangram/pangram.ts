const MIN_CHAR_CODE = 97 //char code of 'a'
const MAX_CHAR_CODE = 122 //char code of 'z'
const TOTAL_ALPHABET_LETTERS = 26

export function isPangram(sentence: string): boolean {
  // Change all characters to lowercase. Remove characters that are not a letter
  let sentenceArray = sentence
    .toLowerCase()
    .split('')
    .filter(
      (character) =>
        character.charCodeAt(0) >= MIN_CHAR_CODE && character.charCodeAt(0) <= MAX_CHAR_CODE
    )

  // Remove duplicates
  sentenceArray = [...new Set(sentenceArray)]

  // Check length. If it is 26, then all alphabet letters are in the array hence it is a pangram
  return sentenceArray.length === TOTAL_ALPHABET_LETTERS
}
