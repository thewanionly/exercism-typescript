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

  unshift(value: TElement): void {
    const item = new Item<TElement>(value)

    if (this.first) {
      this.first.prev = item
      item.next = this.first
      this.first = item
    } else {
      this.first = this.last = item
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
    list.forEach((value: TElement | Type) => {
      this.push(value as TElement)
    })

    return this
  }

  concat<Type>(list: List<Type>): List<TElement> {
    list.forEach((value: TElement | Type | List<Type>) => {
      if (typeof value === typeof list) {
        this.concat(value as List<Type>)
      } else {
        this.push(value as TElement)
      }
    })

    return this
  }

  filter<Type>(filterFn: (item: Type) => boolean): List<Type> {
    const filteredList = new List<Type>()

    this.forEach((value: TElement | Type) => {
      if (filterFn(value as Type)) {
        filteredList.push(value as Type)
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

  map<Type>(mapFn: (item: Type) => Type): List<Type> {
    const mappedList = new List<Type>()

    this.forEach((value: TElement | Type) => {
      mappedList.push(mapFn(value as Type))
    })

    return mappedList
  }

  foldl<ElType, AccType>(
    foldFn: (acc: AccType, item: ElType) => AccType,
    initialValue: AccType
  ): AccType {
    let foldResult: AccType = initialValue

    this.forEach((value: TElement | ElType) => {
      foldResult = foldFn(foldResult, value as ElType)
    })

    return foldResult
  }

  foldr<ElType, AccType>(
    foldFn: (acc: AccType, item: ElType) => AccType,
    initialValue: AccType
  ): AccType {
    return this.reverse().foldl<ElType, AccType>(foldFn, initialValue)
  }

  reverse(): List<TElement> {
    const reversedList = new List<TElement>()

    this.forEach((value) => {
      reversedList.unshift(value)
    })

    return reversedList
  }
}
