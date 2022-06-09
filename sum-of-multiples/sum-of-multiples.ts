export function sum(multiples: number[], limit: number): number {
  const numbers = new Set<number>()

  for (let i = 1; i < limit; i++) {
    for (let multiple of multiples) {
      if (i % multiple === 0) {
        numbers.add(i)
      }
    }
  }

  return [...numbers].reduce((acc, curr) => acc + curr, 0)
}
