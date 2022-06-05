enum Classifications {
  perfect = 'perfect',
  abundant = 'abundant',
  deficient = 'deficient'
}

const alliquotSum = (num: number): number => {
  let factors: number[] = []

  for (let i = 1; i < num; i++) {
    if (num % i === 0) factors.push(i)
  }

  return factors.reduce((acc, curr) => acc + curr, 0)
}

export function classify(num: number): Classifications | never {
  if (num <= 0) throw new Error('Classification is only possible for natural numbers.')

  if (alliquotSum(num) === num) return Classifications.perfect
  if (alliquotSum(num) > num) return Classifications.abundant

  return Classifications.deficient
}
