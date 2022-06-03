const CodonToProtein: { [key: string]: string } = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP'
} as const

type Codon = keyof typeof CodonToProtein
type Protein<T> = T[keyof T]

export function translate(rnaSequence: string): Protein<typeof CodonToProtein>[] {
  const proteins: Protein<typeof CodonToProtein>[] = []
  const codons: Codon[] = rnaSequence.match(/.{1,3}/g) || []

  for (let codon of codons) {
    if (CodonToProtein[codon] === 'STOP') break

    proteins.push(CodonToProtein[codon])
  }

  return proteins
}
