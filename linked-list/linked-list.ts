type NodeType<T> = Node<T> | null

class Node<T> {
  value: T
  next: NodeType<T>
  prev: NodeType<T>

  constructor(value: T, prev: NodeType<T> = null, next: NodeType<T> = null) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}

export class LinkedList<TElement> {
  head: NodeType<TElement>
  tail: NodeType<TElement>

  constructor() {
    this.head = null
    this.tail = null
  }

  public push(element: TElement): void {
    const newNode = new Node(element, this.tail, null)

    if (this.tail) {
      this.tail.next = newNode
    }

    this.tail = newNode

    if (!this.head) {
      this.head = newNode
    }
  }

  public pop(): TElement | void {
    if (this.tail) {
      const prevValue = this.tail.value

      this.tail = this.tail.prev

      if (this.tail) {
        this.tail.next = null
      } else {
        this.head = null
      }

      return prevValue
    }
  }

  public shift(): TElement | void {
    if (this.head) {
      const prevValue = this.head.value

      this.head = this.head.next

      if (this.head) {
        this.head.prev = null
      } else {
        this.tail = null
      }

      return prevValue
    }
  }

  public unshift(element: TElement): void {
    const newNode = new Node(element, null, this.head)

    if (this.head) {
      this.head.prev = newNode
    }

    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }
  }

  public delete(element: TElement): void {
    let currentNode = this.head
    let toDeleteNode = null

    // Find the node to be deleted
    while (currentNode) {
      if (currentNode.value === element) {
        toDeleteNode = currentNode
        break
      }

      currentNode = currentNode.next
    }

    // Delete the node
    if (toDeleteNode) {
      if (toDeleteNode.prev) {
        // toDeleteNode is somewhere in the middle of the list
        toDeleteNode.prev.next = toDeleteNode.next
      } else {
        // toDeleteNode is the current head
        this.head = toDeleteNode.next

        if (this.head) {
          this.head.prev = null
        }
      }

      if (toDeleteNode.next) {
        // toDeleteNode is somewhere in the middle of the list
        toDeleteNode.next.prev = toDeleteNode.prev
      } else {
        // toDeleteNode is the current tail
        this.tail = toDeleteNode.prev

        if (this.tail) {
          this.tail.next = null
        }
      }
    }
  }

  public count(): number {
    let currentNode = this.head
    let count = 0

    while (currentNode) {
      count++
      currentNode = currentNode.next
    }

    return count
  }
}
