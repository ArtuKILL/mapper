import { Iterator } from "./iterator";

export interface IterableCollection {
  createIterator(name: String): Iterator;
}
