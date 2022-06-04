const Nucleotides = {
  A: 'A',
  C: 'C',
  G: 'G',
  T: 'T'
}

type Nucleotide = keyof typeof Nucleotides
type NucleotideCount = {
  [key in Nucleotide]: number
}

export function nucleotideCounts(dnaSequence: string): NucleotideCount {
  let nucleotideCount: NucleotideCount = {
    A: 0,
    C: 0,
    G: 0,
    T: 0
  }

  for (let i = 0; i < dnaSequence.length; i++) {
    if (!(dnaSequence[i] in Nucleotides)) throw new Error('Invalid nucleotide in strand')

    nucleotideCount[dnaSequence[i] as Nucleotide] += 1
  }

  return nucleotideCount
}
