const indexMultiplier: { [key: number]: number } = {
  0: 1,
  1: 10,
  2: 100,
  3: 1000
}

const RomanNumeral: { [key: number]: string } = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
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
      if (RomanNumeral[digit * multiplier]) {
        romanStr.unshift(RomanNumeral[digit * multiplier])
        continue
      }

      if (digit >= 1 && digit <= 3) {
        for (let j = 0; j < digit; j++) {
          romanStr.unshift(RomanNumeral[multiplier])
        }
      }

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
