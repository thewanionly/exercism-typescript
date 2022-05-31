const OPERATIONS = {
  plus: 'plus',
  minus: 'minus',
  multiplied: 'multiplied',
  divided: 'divided'
} as const

type Operation = keyof typeof OPERATIONS

const MATH_QUESTION_INDICATOR = 'What'

const isCharANumber = (char: string): boolean => /^-?\d+$/.test(char)

const operate = (x: number, y: number, operation: Operation): number | never => {
  switch (operation) {
    case OPERATIONS.plus:
      return x + y
    case OPERATIONS.minus:
      return x - y
    case OPERATIONS.multiplied:
      return x * y
    case OPERATIONS.divided:
      return x / y
    default:
      throw new Error('Unknown operation')
  }
}

export const answer = (word: string): number | never => {
  const wordArray = word.slice(0, -1).split(' ')
  const numbers: number[] = []
  const operations: Operation[] = []
  let result = 0

  // Parse numbers and operations
  for (let i = 0; i < wordArray.length; i++) {
    const currWord: string | Operation = wordArray[i]

    // Check for numbers
    if (isCharANumber(currWord)) {
      numbers.push(Number(currWord))
      continue
    }

    // Check for operations
    if (Object.keys(OPERATIONS).includes(currWord)) {
      if (numbers.length - operations.length === 1) {
        operations.push(currWord as Operation)
        continue
      } else {
        throw new Error('Syntax error')
      }
    }

    // Check for unknown operation
    if (
      (i === 0 && currWord !== MATH_QUESTION_INDICATOR) || //check first word to determine if it is non-math question
      isCharANumber(wordArray[i - 1]) //if operations checking above fails and previous word is a number, it means the next word after a number is not an operation
    ) {
      throw new Error('Unknown operation')
    }
  }

  // Calculate result
  if (numbers.length - operations.length === 1) {
    result = numbers.shift() || 0
    for (let i = 0; i < operations.length; i++) {
      result = operate(result, numbers[i], operations[i])
    }
  } else {
    throw new Error('Syntax error')
  }

  return result
}
