export class Rational {
  private numerator: number
  private denominator: number

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator
    this.denominator = denominator
  }

  add(rationalNumber: Rational): Rational {
    this.numerator =
      this.numerator * rationalNumber.denominator + this.denominator * rationalNumber.numerator
    this.denominator = this.denominator * rationalNumber.denominator

    return this.reduce()
  }

  sub(rationalNumber: Rational): Rational {
    this.numerator =
      this.numerator * rationalNumber.denominator - this.denominator * rationalNumber.numerator
    this.denominator = this.denominator * rationalNumber.denominator

    return this.reduce()
  }

  mul(rationalNumber: Rational): Rational {
    this.numerator = this.numerator * rationalNumber.numerator
    this.denominator = this.denominator * rationalNumber.denominator

    return this.reduce()
  }

  div(rationalNumber: Rational): Rational {
    this.numerator = this.numerator * rationalNumber.denominator
    this.denominator = this.denominator * rationalNumber.numerator

    return this.reduce()
  }

  abs(): Rational {
    this.numerator = Math.abs(this.numerator)
    this.denominator = Math.abs(this.denominator)

    return this.reduce()
  }

  exprational(exponent: number): Rational {
    this.numerator =
      exponent >= 0 ? this.numerator ** exponent : this.denominator ** Math.abs(exponent)
    this.denominator =
      exponent >= 0 ? this.denominator ** exponent : this.numerator ** Math.abs(exponent)

    return this.reduce()
  }

  expreal(realNumber: number): number {
    return Number(Math.pow(realNumber ** this.numerator, 1 / this.denominator).toPrecision(15))
  }

  reduce(): Rational {
    const gcd = this.gcd(this.numerator, this.denominator)
    this.numerator = this.numerator / gcd
    this.denominator = this.denominator / gcd

    if (this.denominator < 0) {
      this.numerator *= -1
      this.denominator *= -1
    }

    return this
  }

  gcd(number1: number, number2: number): number {
    const num1Abs = Math.abs(number1)
    const num2Abs = Math.abs(number2)

    if (num2Abs === 0) {
      return num1Abs
    }

    return this.gcd(num2Abs, num1Abs % num2Abs)
  }
}
