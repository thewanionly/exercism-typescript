export function find(haystack: number[], needle: number): number | never {
  let pivot: number = Math.floor(haystack.length / 2)
  let left = 0
  let right: number = haystack.length - 1

  while (haystack[pivot] !== needle && pivot > left && pivot < right) {
    if (haystack[pivot] > needle) {
      right = pivot - 1
    } else {
      left = pivot + 1
    }

    pivot = Math.floor((right - left) / 2) + left
  }

  if (haystack[pivot] === needle) {
    return pivot
  } else {
    throw new Error('Value not in array')
  }
}
