// Referencia
// Gleb Irovich
// 13/07/2020
// Typescript Data Structures: Stack and Queue
// 1.0.0
// https://dev.to/glebirovich/typescript-data-structures-stack-and-queue-hld

import { IStack } from "./istack";

export class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }
}
