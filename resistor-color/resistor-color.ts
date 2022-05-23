const ResistorColorValues = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
} as const

// Type union of all possible colors (for the parameter)
type Color = keyof typeof ResistorColorValues

// Type union of all possible color values (for the return type)
type Values<T> = T[keyof T]

export const colorCode = (color: Color): Values<typeof ResistorColorValues> => {
  return ResistorColorValues[color]
}

export const COLORS = Object.keys(ResistorColorValues)
