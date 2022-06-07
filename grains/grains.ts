const MAX_SQUARES = 64

export const square = (squareNum: number): bigint | never => {
  if (squareNum <= 0 || squareNum > MAX_SQUARES) throw new Error()

  return BigInt(2 ** (squareNum - 1))
}

export const total = (): bigint => {
  let totalGrains = BigInt(0)

  for (let i = 0; i < MAX_SQUARES; i++) {
    totalGrains += BigInt(2 ** i)
  }

  return totalGrains
}
