import { Iterator } from "./itertor";

export interface IterableCollection {
  createIterator(): Iterator;
}
