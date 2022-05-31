const MIN_CHAR_CODE = 97 //char code of 'a'
const MAX_CHAR_CODE = 122 //char code of 'z'
const OFFSET = MAX_CHAR_CODE - MIN_CHAR_CODE
const LETTERS_TOTAL = 26
const RANDOM_KEY_LENGTH = 100

enum CipherTypeEnum {
  encode = 'encode',
  decode = 'decode'
}

type CipherType = keyof typeof CipherTypeEnum

export class SimpleCipher {
  private cipherKey: string

  constructor(key: string = '') {
    this.cipherKey = key || this.generateKey()
  }

  get key(): string {
    return this.cipherKey
  }

  private generateKey(): string {
    let key = ''

    for (let i = 0; i < RANDOM_KEY_LENGTH; i++) {
      // Generate random number from 0 to 25
      const randomNumber = Math.floor(Math.random() * LETTERS_TOTAL)

      // Get the character equivalent of the random number and append to key
      key += String.fromCharCode(MIN_CHAR_CODE + randomNumber)
    }

    return key
  }

  private modulo(x: number, y: number): number {
    return ((x % y) + y) % y
  }

  transcode(text: string, type: CipherType): string {
    const multiplier = type === CipherTypeEnum.encode ? 1 : -1

    return text
      .replace(/\W/g, '') //remove non-word characters and white spaces, but keeyp the numbers
      .toLowerCase() //turn all chars to lower case
      .split('')
      .map((letter: string, index: number): string =>
        String.fromCharCode(
          this.modulo(
            letter.charCodeAt(0) -
              MIN_CHAR_CODE +
              (this.cipherKey[index % this.cipherKey.length].charCodeAt(0) - MIN_CHAR_CODE) *
                multiplier,
            OFFSET + 1
          ) + MIN_CHAR_CODE
        )
      )
      .join('')
  }

  encode(text: string): string {
    return this.transcode(text, CipherTypeEnum.encode)
  }

  decode(text: string): string {
    return this.transcode(text, CipherTypeEnum.decode)
  }
}
