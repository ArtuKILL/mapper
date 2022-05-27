// Referencia
// Gleb Irovich
// 13/07/2020
// Typescript Data Structures: Stack and Queue
// 1.0.0
// https://dev.to/glebirovich/typescript-data-structures-stack-and-queue-hld

export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}
