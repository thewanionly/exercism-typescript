const DNAtoRNAMapping: { [key: string]: string } = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
} as const

type DNANucleotide = keyof typeof DNAtoRNAMapping

type RNANucleotide<T> = T[keyof T]

export function toRna(DNAStrand: string): string {
  const DNAStrandArray: string[] = DNAStrand.split('')

  // Check if input is valid
  if (DNAStrandArray.some((nucleotide) => !Object.keys(DNAtoRNAMapping).includes(nucleotide))) {
    // Throw error if invalid
    throw new Error('Invalid input DNA.')
  }

  // Determine RNA complement if valid
  return DNAStrandArray.map(
    (nucleotide: DNANucleotide): RNANucleotide<typeof DNAtoRNAMapping> =>
      DNAtoRNAMapping[nucleotide]
  ).join('')
}
