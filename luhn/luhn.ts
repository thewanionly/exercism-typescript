export function valid(digitString: string): boolean {
  let digitArray = digitString.replace(/\s/g, '').split('') //remove all whitespaces

  // check if length is less than or equal to 1
  if (digitArray.length <= 1) return false

  // check if there are non-digit characters
  if (digitArray.some((char) => !/^-?\d+$/.test(char))) return false

  // Luhn algorithm
  // 1. double every second digit, starting from the right
  digitArray = digitArray
    .reverse()
    .map((char, index) => {
      if (index % 2 !== 0) {
        const num = Number(char) * 2

        // if doubling the number results in a number greater than 9 then subtract 9 from the product.
        return String(num > 9 ? num - 9 : num)
      }

      return char
    })
    .reverse()

  //2. sum all of the digits
  const digitsSum: number = digitArray.reduce((acc, curr) => acc + Number(curr), 0)

  //3. If the sum is evenly divisible by 10, then the number is valid.
  return digitsSum % 10 === 0
}
