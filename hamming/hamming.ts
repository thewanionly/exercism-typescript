export function compute(left: string, right: string): number | never {
  // throw an error if left and right does not have the same length
  if (left.length !== right.length) throw new Error('DNA strands must be of equal length.')

  // return 0 if left and right are the same
  if (left === right) return 0

  // compute for the hamming distance
  return left.split('').filter((letter, i) => letter !== right[i]).length
}
