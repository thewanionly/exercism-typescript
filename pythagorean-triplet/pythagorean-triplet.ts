type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}

class Triplet {
  constructor(private a: number, private b: number, private c: number) {}

  toArray(): [number, number, number] {
    return [this.a, this.b, this.c]
  }
}

export function triplets({ sum, minFactor = 1, maxFactor }: Options): Triplet[] {
  const tripletsArr: Triplet[] = []

  const maxLimit = maxFactor ?? sum

  // Find all 3 numbers that sum up to `sum`
  for (let a = minFactor; a < maxLimit; a++) {
    for (let b = a + 1; b < maxLimit; b++) {
      for (let c = b + 1; c < maxLimit; c++) {
        const N = a + b + c

        if (N === sum && a ** 2 + b ** 2 === c ** 2) {
          tripletsArr.push(new Triplet(a, b, c))
        }

        if (N + 1 > sum) break
      }
    }
  }
  return tripletsArr
}
