enum ResistorColorValues {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white
}

type ResistorColor = keyof typeof ResistorColorValues

export function decodedValue([firstBand, secondBand]: ResistorColor[]): number {
  return ResistorColorValues[firstBand] * 10 + ResistorColorValues[secondBand]
}
