interface Roster {
  [key: number]: string[]
}

export class GradeSchool {
  private schoolRoster: Roster = {}

  constructor() {}

  roster(): Roster {
    // Return a deep copy of schoolRoster to make schoolRoster immutable from outisde updates
    return Object.fromEntries(
      Object.entries(this.schoolRoster).map(([key, value]) => [key, [...value]])
    )
  }

  add(name: string, grade: number): void {
    // Check if the name already exist in other grades. If so, remove the name from the previous grade
    const gradesList: number[] = Object.keys(this.schoolRoster).map((key: string) => Number(key))

    for (let i = 0; i < gradesList.length; i++) {
      if (this.schoolRoster[gradesList[i]]?.includes(name)) {
        this.schoolRoster[gradesList[i]] = this.schoolRoster[gradesList[i]].filter(
          (studentName: string) => studentName !== name
        )

        break
      }
    }

    if (this.schoolRoster[grade]) {
      // Add new name then sort alphabetically
      this.schoolRoster[grade] = [...this.schoolRoster[grade], name].sort(
        (a: string, b: string): number => a.localeCompare(b)
      )
    } else {
      this.schoolRoster[grade] = [name]
    }
  }

  grade(grade: number): string[] {
    return this.schoolRoster[grade] ? [...this.schoolRoster[grade]] : []
  }
}
