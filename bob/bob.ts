const BobResponse = {
  question: 'Sure.',
  yell: 'Whoa, chill out!',
  yell_question: `Calm down, I know what I'm doing!`,
  nothing: 'Fine. Be that way!',
  other: 'Whatever.'
} as const

type Response<T> = T[keyof T]

export function hey(message: string): Response<typeof BobResponse> {
  const incomingMessage = message.replace(/\s/g, '') // remove all whitespaces
  let response: Response<typeof BobResponse> = BobResponse.other // set other as default

  // for nothing, check if message is empty
  if (!incomingMessage) {
    response = BobResponse.nothing
  } else {
    // for question, check if end char is "?"
    if (incomingMessage.slice(-1) === '?') {
      response = BobResponse.question
    }

    // for yelling, check if all letters is upper case
    if (
      incomingMessage.toUpperCase() === incomingMessage &&
      incomingMessage.toLowerCase() !== incomingMessage
    ) {
      response = BobResponse.yell
    }

    // for yelling + questioning, check if all letters is upper case and has "?" at the end
    if (
      incomingMessage.slice(-1) === '?' &&
      incomingMessage.toUpperCase() === incomingMessage &&
      incomingMessage.toLowerCase() !== incomingMessage
    ) {
      response = BobResponse.yell_question
    }
  }

  return response
}
