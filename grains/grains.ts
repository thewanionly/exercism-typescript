const MAX_SQUARES = 64

export const square = (squareNum: number): bigint | never => {
  if (squareNum <= 0 || squareNum > MAX_SQUARES) throw new Error()

  return BigInt(2 ** (squareNum - 1))
}

export const total = (): bigint => {
  return [...new Array(MAX_SQUARES).keys()].reduce(
    (acc: bigint, curr) => acc + BigInt(2 ** curr),
    BigInt(0)
  )
}
