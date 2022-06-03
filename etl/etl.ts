type OldScoring = {
  [key: string]: string[]
}

type NewScoring = {
  [key: string]: number
}

export function transform(oldScoring: OldScoring): NewScoring {
  let newScoring: NewScoring = {}

  Object.entries(oldScoring).forEach(([score, letters]) => {
    letters.forEach((letter) => {
      newScoring[letter.toLowerCase()] = Number(score)
    })
  })

  return newScoring
}
