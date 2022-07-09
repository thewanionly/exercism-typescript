export const largestProduct = (input: string, digitslength: number): number => {
  //validity check
  if (input.length < digitslength) throw new Error('Span must be smaller than string length')
  if (digitslength < 0) throw new Error('Span must be greater than zero')
  if (input.split('').some((char) => !/^-?\d+$/.test(char)))
    throw new Error('Digits input must only contain digits')

  let largestProd = 0

  for (let i = 0; i <= input.length - digitslength; i++) {
    let currProduct = 1

    for (let j = i; j < i + digitslength; j++) {
      currProduct *= Number(input.charAt(j))
    }

    if (!largestProd || currProduct > largestProd) {
      largestProd = currProduct
    }
  }

  return largestProd
}
