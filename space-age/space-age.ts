enum OrbitalPeriod {
  mercury = 0.2408467,
  venus = 0.61519726,
  earth = 1,
  mars = 1.8808158,
  jupiter = 11.862615,
  saturn = 29.447498,
  uranus = 84.016846,
  neptune = 164.79132
}

const EARTH_SECONDS_PER_YEAR = 31557600

type Planet = keyof typeof OrbitalPeriod

export function age(planet: Planet, seconds: number): number {
  const planetAge = seconds / (OrbitalPeriod[planet] * EARTH_SECONDS_PER_YEAR)
  const planteAge2Dec = Math.round((planetAge + Number.EPSILON) * 100) / 100

  return planteAge2Dec
}
