import { Iterator } from "../lib/iterator";
import { IterableCollection } from "../lib/iterable_collection";

class App<T> {
  private iterable: IterableCollection<T>;

  constructor(iterable: IterableCollection<T>) {
    this.iterable = iterable;
  }

  public showCollection(): void {
    const iterator = this.iterable.createIterator();
    while (iterator.hasMore) {
      console.log(iterator.current());
      iterator.next();
    }
  }
}
