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

export const colorCode = (color: keyof typeof ResistorColorValues): number => {
  return ResistorColorValues[color]
}

export const COLORS = Object.keys(ResistorColorValues).slice(
  Object.keys(ResistorColorValues).length / 2
)
