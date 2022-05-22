import { Iterator } from "../lib/iterator";
import { IterableCollection } from "../lib/iterable_collection";

class App<T> {
  private iterable: IterableCollection<T>;

  constructor(iterable: IterableCollection<T>) {
    this.iterable = iterable;
  }
}
