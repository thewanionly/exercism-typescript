export class Series {
  constructor(private series: string) {}

  slices(sliceLength: number): number[][] {
    //Error checking
    if (!this.series) throw new Error('series cannot be empty')
    if (sliceLength > this.series.length)
      throw new Error('slice length cannot be greater than series length')
    if (sliceLength === 0) throw new Error('slice length cannot be zero')
    if (sliceLength < 0) throw new Error('slice length cannot be negative')

    const results: string[] = []

    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      results.push(this.series.substring(i, i + sliceLength))
    }

    return results.map((res) => res.split('').map((numStr) => Number(numStr)))
  }
}
