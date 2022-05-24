export class DnDCharacter {
  hitpoints = 0
  strength = 0
  dexterity = 0
  constitution = 0
  intelligence = 0
  wisdom = 0
  charisma = 0

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  public static generateAbilityScore(): number {
    const results: number[] = []

    // Generate random number from 1 to 6 four times and store in results
    for (let i = 0; i < 4; i++) {
      results.push(Math.floor(Math.random() * 6) + 1)
    }

    // Remove the smallest number
    results.sort((a, b) => a - b).splice(0, 1)

    // Add all the remaining numbers
    return results.reduce((acc, curr) => acc + curr, 0)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}
