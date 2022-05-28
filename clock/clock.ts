const HOURS_IN_A_DAY = 24
const MINUTES_IN_AN_HOUR = 60

enum TimeUnit {
  hour = 'hour',
  minute = 'minute'
}

enum TimeUnitLimit {
  hour = HOURS_IN_A_DAY,
  minute = MINUTES_IN_AN_HOUR
}

export class Clock {
  private hour: number
  private minute: number

  constructor(hour: number, minute: number = 0) {
    this.hour = this.calculateTime(TimeUnit.hour, this.calculateTotalHours(hour, minute))
    this.minute = this.calculateTime(TimeUnit.minute, minute)
  }

  public toString(): string {
    return `${this.toTwoDigitsString(this.hour)}:${this.toTwoDigitsString(this.minute)}`
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hour, this.minute + minutes)
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hour, this.minute - minutes)
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString()
  }

  private calculateTotalHours(hours: number, minutes: number): number {
    // Get the total hours, including the exceeding minutes
    return hours + Math.floor(minutes / MINUTES_IN_AN_HOUR)
  }

  private calculateTime(unit: TimeUnit, value: number): number {
    // Get the absolute time. This is to handle case where time is negative
    let absoluteTime =
      value + TimeUnitLimit[unit] * Math.abs(Math.floor(value / TimeUnitLimit[unit]))

    // If time exceeds the max limit, roll over
    absoluteTime = absoluteTime % TimeUnitLimit[unit]

    return absoluteTime
  }

  private toTwoDigitsString(value: number): string {
    // Convert to two digit string
    return String(value).padStart(2, '0')
  }
}
