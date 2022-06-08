export class Anagram {
  word: string

  constructor(word: string) {
    this.word = word
  }

  public matches(...candidates: string[]): string[] {
    return candidates.filter(
      (candidate) =>
        this.word.toLowerCase() !== candidate.toLowerCase() &&
        this.rearrange(this.word) === this.rearrange(candidate)
    )
  }

  private rearrange(word: string): string {
    return word
      .split('')
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .join('')
      .toLowerCase()
  }
}
