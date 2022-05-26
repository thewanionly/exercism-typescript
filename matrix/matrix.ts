export class Matrix {
  matrixRows: number[][] = []
  matrixColumns: number[][] = []

  constructor(matrix: string) {
    matrix.split('\n').forEach((row: string): void => {
      const rowArray = row.split(' ').map((val: string): number => Number(val))

      //set rows
      this.matrixRows.push(rowArray)

      //set columns
      rowArray.forEach((value: number, colIndex: number): void => {
        this.matrixColumns[colIndex]
          ? this.matrixColumns[colIndex].push(value)
          : (this.matrixColumns[colIndex] = [value])
      })
    })
  }

  get rows(): number[][] {
    return this.matrixRows
  }

  get columns(): number[][] {
    return this.matrixColumns
  }
}
