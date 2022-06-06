export class ComplexNumber {
  realPart: number
  imaginaryPart: number

  constructor(real: number, imaginary: number) {
    this.realPart = real
    this.imaginaryPart = imaginary
  }

  public get real(): number {
    return this.realPart
  }

  public get imag(): number {
    return this.imaginaryPart
  }

  public add(complexNumber: ComplexNumber): ComplexNumber {
    const real = this.real + complexNumber.real
    const imaginary = this.imag + complexNumber.imag

    return new ComplexNumber(real, imaginary)
  }

  public sub(complexNumber: ComplexNumber): ComplexNumber {
    const real = this.real - complexNumber.real
    const imaginary = this.imag - complexNumber.imag

    return new ComplexNumber(real, imaginary)
  }

  public div(complexNumber: ComplexNumber): ComplexNumber {
    const real =
      (this.real * complexNumber.real + this.imag * complexNumber.imag) /
      (complexNumber.real ** 2 + complexNumber.imag ** 2)
    const imaginary =
      (this.imag * complexNumber.real - this.real * complexNumber.imag) /
      (complexNumber.real ** 2 + complexNumber.imag ** 2)

    return new ComplexNumber(real, imaginary)
  }

  public mul(complexNumber: ComplexNumber): ComplexNumber {
    const real = this.real * complexNumber.real - this.imag * complexNumber.imag
    const imaginary = this.imag * complexNumber.real + this.real * complexNumber.imag

    return new ComplexNumber(real, imaginary)
  }

  public get abs(): number {
    return Math.sqrt(this.real ** 2 + this.imag ** 2)
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this.real, this.imag > 0 ? -this.imag : 0)
  }

  public get exp(): ComplexNumber {
    const real = Math.E ** this.real * Math.cos(this.imag)
    const imaginary = Math.E ** this.real * Math.sin(this.imag)
    return new ComplexNumber(real, imaginary)
  }
}
