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

export function decodedResistorValue([firstBand, secondBand, thirdBand]: ResistorColor[]): string {
  return `${
    (ResistorColorValues[firstBand] * 10 + ResistorColorValues[secondBand]) *
    10 ** ResistorColorValues[thirdBand]
  } ohms`.replace('000 ', ' kilo')
}
