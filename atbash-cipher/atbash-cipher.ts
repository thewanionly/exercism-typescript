const MIN_CHAR_CODE = 97 //char code of 'a'
const MAX_CHAR_CODE = 122 //char code of 'z'
const OFFSET = MAX_CHAR_CODE - MIN_CHAR_CODE
const MULTIPLIER = 2
const GROUP_LENGTH = 5
const GROUP_SEPARATOR = ' '

const cipherLetter = (letter: string): string => {
  return /^\d+$/.test(letter)
    ? letter
    : String.fromCharCode(
        letter.charCodeAt(0) + (OFFSET - (letter.charCodeAt(0) - MIN_CHAR_CODE) * MULTIPLIER)
      )
}

const transcode = (text: string): string => {
  return text
    .replace(/\W/g, '') //remove non-word characters and white spaces, but keeyp the numbers
    .toLowerCase() //turn all chars to lower case
    .split('')
    .map(cipherLetter)
    .join('')
}

export function encode(plainText: string): string {
  return transcode(plainText)
    .split('')
    .reduce((acc: string[], curr: string, index: number): string[] => {
      // grouping
      let updates: string[] = [curr]

      if (index !== 0 && index % GROUP_LENGTH === 0) {
        updates = [GROUP_SEPARATOR, ...updates]
      }

      return [...acc, ...updates]
    }, [])
    .join('')
}

export function decode(cipherText: string): string {
  return transcode(cipherText)
}
