const BobResponse = [
  'Whatever.',
  'Sure.',
  'Whoa, chill out!',
  `Calm down, I know what I'm doing!`,
  'Fine. Be that way!'
] as const

enum MessageType {
  other,
  question,
  yell,
  yell_quesion,
  nothing
}

type Response<T> = T[keyof T]

export function hey(message: string): Response<typeof BobResponse> {
  const incomingMessage = message.replace(/\s/g, '') // remove all whitespaces
  let responseIndex = MessageType.other // set other as default

  // If empty, set to nothing
  if (!incomingMessage) {
    responseIndex = MessageType.nothing
  }

  // If question, set to question
  if (incomingMessage.slice(-1) === '?') {
    responseIndex = MessageType.question
  }

  // If yelling, if current index is already set previously, set to yell_question. Otherwise, set to yell
  if (
    incomingMessage.toUpperCase() === incomingMessage &&
    incomingMessage.toLowerCase() !== incomingMessage
  ) {
    responseIndex = responseIndex ? MessageType.yell_quesion : MessageType.yell
  }

  // return the corresponding response based on the responseIndex
  return BobResponse[responseIndex]
}
