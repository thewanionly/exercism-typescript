const indexMultiplier: { [key: number]: number } = {
  0: 1,
  1: 10,
  2: 100,
  3: 1000
}

const RomanNumeral: { [key: number]: string } = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}

export const toRoman = (num: number): string => {
  const numArray = String(num)
    .split('')
    .map((numStr) => Number(numStr))
    .reverse()
  const romanStr: string[] = []

  for (let i = 0; i < numArray.length; i++) {
    const digit = numArray[i]
    const multiplier = indexMultiplier[i]

    if (digit > 0) {
      // if found in RomanNumeral object
      if (RomanNumeral[digit * multiplier]) {
        romanStr.unshift(RomanNumeral[digit * multiplier])
        continue
      }

      // if digit is 4 or 9
      if (digit === 4 || digit === 9) {
        romanStr.unshift(`${RomanNumeral[multiplier]}${RomanNumeral[(digit + 1) * multiplier]}`)
      }

      // if digit is 1, 2 or 3
      if (digit >= 1 && digit <= 3) {
        for (let j = 0; j < digit; j++) {
          romanStr.unshift(RomanNumeral[multiplier])
        }
      }

      // if digit is 6, 7 or 8
      if (digit >= 6 && digit <= 8) {
        for (let j = 0; j < digit - 5; j++) {
          romanStr.unshift(RomanNumeral[multiplier])
        }
        romanStr.unshift(RomanNumeral[5 * multiplier])
      }
    }
  }

  return romanStr.join('')
}
