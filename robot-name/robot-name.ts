export class Robot {
  private robotName = ''
  private generatedNames: string[] = []

  constructor() {
    this.generateName()
  }

  private generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  private generateName(): void {
    let tempName: (string | number)[] = []
    let generatedName = ''

    do {
      // Generate two letters
      for (let i = 0; i < 2; i++) {
        tempName.push(
          String.fromCharCode(this.generateRandomNumber('A'.charCodeAt(0), 'Z'.charCodeAt(0)))
        )
      }

      // Generate three numbers
      for (let i = 0; i < 3; i++) {
        tempName.push(this.generateRandomNumber(0, 9))
      }

      generatedName = tempName.join('')
    } while (this.generatedNames.includes(generatedName))

    this.robotName = generatedName
    this.generatedNames.push(generatedName)
  }

  public get name(): string {
    return this.robotName
  }

  public resetName(): void {
    this.generateName()
  }

  public static releaseNames(): void {
    new Robot().generatedNames = []
  }
}
