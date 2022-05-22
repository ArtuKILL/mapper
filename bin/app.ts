import { Iterator } from "../lib/iterator";
import { IterableCollection } from "../lib/iterable_collection";

class App {
  private iterable: IterableCollection;

  constructor(iterable: IterableCollection) {
    this.iterable = iterable;
  }
}
