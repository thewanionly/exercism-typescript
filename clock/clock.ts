const HOURS_IN_A_DAY = 24
const MINUTES_IN_AN_HOUR = 60

export class Clock {
  private hour: string
  private minute: string

  constructor(hour: number, minute: number = 0) {
    // Get the total hours, including the exceeding minutes
    const totalHours = hour + Math.floor(minute / MINUTES_IN_AN_HOUR)

    this.hour = this.calculateTime(totalHours, HOURS_IN_A_DAY)
    this.minute = this.calculateTime(minute, MINUTES_IN_AN_HOUR)
  }

  public toString(): string {
    return `${this.hour}:${this.minute}`
  }

  public plus(minutes: unknown): Clock {
    throw new Error('Remove this statement and implement this function')
  }

  public minus(minutes: unknown): Clock {
    throw new Error('Remove this statement and implement this function')
  }

  public equals(other: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  private calculateTime(time: number, max: number): string {
    // Get the absolute time. This is to handle case where time is negative
    let absoluteTime = time + max * Math.abs(Math.floor(time / max))

    // If time exceeds the max limit, roll over
    absoluteTime = absoluteTime % max

    // Convert to two digit string
    return String(absoluteTime).padStart(2, '0')
  }
}
