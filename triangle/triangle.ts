export class Triangle {
  side1: number
  side2: number
  side3: number

  constructor(...sides: number[]) {
    const [side1, side2, side3] = sides

    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
  }

  private get isValid(): boolean {
    return (
      this.side1 + this.side2 + this.side3 > 0 &&
      this.side1 + this.side2 > this.side3 &&
      this.side2 + this.side3 > this.side1 &&
      this.side1 + this.side3 > this.side2
    )
  }

  get isEquilateral(): boolean {
    return this.isValid && this.side1 === this.side2 && this.side1 === this.side3
  }

  get isIsosceles(): boolean {
    return (
      this.isValid &&
      (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3)
    )
  }

  get isScalene(): boolean {
    return (
      this.isValid &&
      this.side1 !== this.side2 &&
      this.side1 !== this.side3 &&
      this.side2 !== this.side3
    )
  }
}
