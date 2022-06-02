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

  public static create<Type>(...values: Type[]): List<Type> {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.
    const list = new List<Type>()

    values.forEach((value: Type) => list.push(value))

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

  append<Type>(list: List<Type>): List<TElement> {
    list.forEach((value) => {
      this.push(value)
    })

    return this
  }

  concat<Type>(list: List<Type>): List<TElement> {
    list.forEach((value) => {
      if (typeof value === typeof list) {
        this.concat(value)
      } else {
        this.push(value)
      }
    })

    return this
  }

  filter<Type>(filterFn: (item: Type) => boolean): List<Type> {
    const filteredList = new List<Type>()

    this.forEach((value) => {
      if (filterFn(value)) {
        filteredList.push(value)
      }
    })

    return filteredList
  }

  length(): number {
    let count = 0

    this.forEach(() => {
      count++
    })

    return count
  }

  map<Type>(mapFn: (item: TElement) => Type): List<Type> {
    const mappedList = new List<Type>()

    this.forEach((value) => {
      mappedList.push(mapFn(value))
    })

    return mappedList
  }
}
