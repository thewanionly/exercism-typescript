const MIN_CHAR_CODE = 97 //char code of 'a'
const MAX_CHAR_CODE = 122 //char code of 'z'
const OFFSET = MAX_CHAR_CODE - MIN_CHAR_CODE
const MULTIPLIER = 2
const GROUP_LENGTH = 5

export function encode(plainText: string): string {
  let textArray = plainText
    .replace(/\s/g, '') //remove white spaces
    .toLowerCase() //turn all chars to lower case
    .split('')
    .filter(
      //remove characters that are not a letter but keep the numbers
      (character) =>
        (character.charCodeAt(0) >= MIN_CHAR_CODE && character.charCodeAt(0) <= MAX_CHAR_CODE) ||
        /^\d+$/.test(character)
    )

  textArray = textArray.map(
    // encoding logic
    (letter: string): string =>
      /^\d+$/.test(letter)
        ? letter
        : String.fromCharCode(
            letter.charCodeAt(0) + (OFFSET - (letter.charCodeAt(0) - MIN_CHAR_CODE) * MULTIPLIER)
          )
  )

  //grouping
  let groupedArray = []
  let subGroupArray = []

  for (let i = 0; i < textArray.length; i++) {
    if ((i + 1) % GROUP_LENGTH !== 0) {
      subGroupArray.push(textArray[i])
    } else {
      subGroupArray.push(textArray[i])
      groupedArray.push(subGroupArray.join(''))
      subGroupArray = []
    }
  }

  groupedArray.push(subGroupArray.join(''))

  return groupedArray.join(' ').trim()
}

export function decode(cipherText: string): string {
  let textArray = cipherText
    .replace(/\s/g, '') //remove white spaces
    .split('')

  textArray = textArray.map(
    // decoding logic
    (letter: string): string =>
      /^\d+$/.test(letter)
        ? letter
        : String.fromCharCode(
            letter.charCodeAt(0) + (OFFSET - (letter.charCodeAt(0) - MIN_CHAR_CODE) * MULTIPLIER)
          )
  )

  return textArray.join('')
}
