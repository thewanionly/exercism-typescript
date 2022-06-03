export function steps(num: number): number {
  if (num <= 0) throw new Error('Only positive numbers are allowed')

  let count = 0
  let currentNum = num

  while (currentNum !== 1) {
    count++
    currentNum = currentNum % 2 === 0 ? currentNum / 2 : 3 * currentNum + 1
  }

  return count
}
