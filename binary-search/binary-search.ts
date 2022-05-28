export function find(haystack: number[], needle: number): number | never {
  let left = 0
  let pivot: number = Math.floor(haystack.length / 2)
  let right: number = haystack.length - 1

  while (left <= right) {
    if (haystack[pivot] === needle) {
      return pivot
    } else if (haystack[pivot] > needle) {
      right = pivot - 1
    } else {
      left = pivot + 1
    }

    pivot = Math.floor((left + right) / 2)
  }

  throw new Error('Value not in array')
}
