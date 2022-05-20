import { Iterator } from "../lib/iterator";
import { IterableCollection } from "../lib/iterableCollection";

class App {
  private iterable: IterableCollection;

  constructor(iterable: IterableCollection) {
    this.iterable = iterable;
  }
}
