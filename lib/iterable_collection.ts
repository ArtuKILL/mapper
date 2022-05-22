import { Iterator } from "./iterator";

export interface IterableCollection<T> {
  createIterator(name: String): Iterator<T>;
}
