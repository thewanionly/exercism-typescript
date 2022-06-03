export class Triangle {
  sides: number[]
  perimeter: number

  constructor(...sides: number[]) {
    this.sides = sides.sort((a, b) => a - b)
    this.perimeter = sides.reduce((acc, curr) => acc + curr, 0)
  }

  private isValid(): boolean {
    return this.perimeter > 0 && this.sides[0] + this.sides[1] > this.sides[2]
  }

  get isEquilateral(): boolean {
    return this.isValid() && new Set(this.sides).size === 1
  }

  get isIsosceles(): boolean {
    return this.isValid() && new Set(this.sides).size <= 2
  }

  get isScalene(): boolean {
    return this.isValid() && new Set(this.sides).size === 3
  }
}
