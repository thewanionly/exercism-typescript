type ItemType<T> = Item<T> | null

class Item<T> {
  value: T
  next: ItemType<T>
  prev: ItemType<T>

  constructor(value: T, next?: ItemType<T>, prev?: ItemType<T>) {
    this.value = value
    this.prev = next || null
    this.next = prev || null
  }
}

export class List<TElement> {
  first: ItemType<TElement> = null
  last: ItemType<TElement> = null

  public static create(...values: (number | number[])[]): List<number | number[]> {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.
    const list = new List<number | number[]>()

    values.forEach((value: number | number[]) => list.push(value))

    return list
  }

  push(value: TElement): void {
    const item = new Item<TElement>(value)

    if (this.last) {
      this.last.next = item
      item.prev = this.last
      this.last = item
    } else {
      this.last = this.first = item
    }
  }

  forEach(callbackFn: (value: TElement) => void): void {
    let currItem = this.first

    while (currItem) {
      callbackFn(currItem.value)
      currItem = currItem.next
    }
  }

  /**
   * Given two lists, add all items in the second list to the end of the first list
   */
  append(list: List<TElement>): List<TElement> {
    list.forEach((value) => {
      this.push(value)
    })

    return this
  }
}
