export function convert(num: number): string {
  let res = ''

  if (num % 3 === 0) {
    res = 'Pling'
  }

  if (num % 5 === 0) {
    res += 'Plang'
  }

  if (num % 7 === 0) {
    res += 'Plong'
  }

  if (!res.length) {
    res = String(num)
  }

  return res
}
