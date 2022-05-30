import { IterableCollection } from "../lib/iterator/iterable_collection";

// Solo depende de la interfaz iterable collection

export class App<T> {
  private iterable: IterableCollection<T>;

  constructor(iterable: IterableCollection<T>) {
    this.iterable = iterable;
  }

  public showCollection(): void {
    console.log(`Showing collection:`);
    const iterator = this.iterable.createIterator();
    while (iterator.hasMore()) {
      console.table(iterator.next());
    }
  }
}
