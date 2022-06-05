const Allergens: { [key: string]: number } = {
  cats: 128,
  pollen: 64,
  chocolate: 32,
  tomatoes: 16,
  strawberries: 8,
  shellfish: 4,
  peanuts: 2,
  eggs: 1
}

const ExcludedAllergenScores = [1024, 512, 256]

type Allergen = keyof typeof Allergens

export class Allergies {
  allergens: Allergen[] = []

  constructor(allergenIndex: number) {
    let currAllergenScore = allergenIndex
    let excludedAllergenScore =
      ExcludedAllergenScores.find((score) => currAllergenScore > score) || 0

    // deduct the max excluded allergen score from currAllergenScore
    while (excludedAllergenScore) {
      currAllergenScore -= excludedAllergenScore
      excludedAllergenScore = ExcludedAllergenScores.find((score) => currAllergenScore > score) || 0
    }

    // loop over the allergens and based on the currAllergenScore, create the allergens list
    if (allergenIndex > 0) {
      for (let allergen in Allergens) {
        const allergenScore = Allergens[allergen]

        if (allergenScore <= currAllergenScore) {
          this.allergens.unshift(allergen)
          currAllergenScore -= allergenScore
        }
      }
    }
  }

  public list(): Allergen[] {
    return this.allergens
  }

  public allergicTo(allergen: Allergen): boolean {
    return this.allergens.includes(allergen)
  }
}
