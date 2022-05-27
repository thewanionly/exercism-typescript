interface Roster {
  [key: number]: string[]
}

export class GradeSchool {
  private schoolRoster: Roster = {}

  constructor() {}

  roster(): Roster {
    // Return a deep copy of schoolRoster to make schoolRoster immutable from outisde updates
    return JSON.parse(JSON.stringify(this.schoolRoster))
  }

  add(name: string, grade: number): void {
    this.removeDuplicates(name)

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
    return this.roster()[grade] || []
  }

  private removeDuplicates(name: string): void {
    // Check if the name already exist in other grades. If so, remove the name from the previous grade
    for (let grade in this.schoolRoster) {
      if (this.schoolRoster[grade]?.includes(name)) {
        this.schoolRoster[grade] = this.schoolRoster[grade].filter(
          (studentName: string) => studentName !== name
        )

        break
      }
    }
  }
}
