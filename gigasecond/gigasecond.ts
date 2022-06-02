const GIGASECOND = 10 ** 9
const MILLISECOND = 10 ** -3

export class Gigasecond {
  milliseconds: number

  constructor(moment: Date) {
    this.milliseconds = moment.getTime()
  }

  public date(): Date {
    return new Date(this.milliseconds + GIGASECOND / MILLISECOND)
  }
}
