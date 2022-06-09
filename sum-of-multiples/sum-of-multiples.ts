export function sum(multiples: number[], limit: number): number {
  let sumOfMultiples = 0

  for (let i = 1; i < limit; i++) {
    if (multiples.some((multiple) => i % multiple === 0)) {
      sumOfMultiples += i
    }
  }

  return sumOfMultiples
}
