import { Iterator } from "./iterator";

export interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}
