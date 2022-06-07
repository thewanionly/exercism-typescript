export function parse(phrase: string): string {
  return phrase
    .replace(/([A-Z]+)/g, ' $1') //put a space before the found uppercase letter except if there's an uppercase letter preceeding the current uppercase letter
    .replace(/\W/g, ' ') //replace non-word characters and white spaces to space
    .split(' ') //conver to array
    .map((word) => word[0]) //take the first leter of the word
    .join('') //convert back to string
    .toUpperCase() //turnt he string to uppercase
}
