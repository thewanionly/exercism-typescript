export function compute(left: string, right: string): number | never {
  // throw an error if left and right does not have the same length
  if (left.length !== right.length) throw new Error('DNA strands must be of equal length.')

  let hammingDistance = 0

  // return 0 if left and right are the same
  if (left !== right) {
    // compute for the hamming distance
    for (let i = 0; i < left.length; i++) {
      if (left[i] !== right[i]) {
        hammingDistance++
      }
    }
  }

  return hammingDistance
}
