import { IterableCollection } from "../iterator/iterable_collection";

export class Filter {
  public static filter<I>(
    collection: IterableCollection<I>,
    f: (e: I) => boolean
  ): I[] {
    const newList: I[] = [];
    const iterator = collection.createIterator();
    while (iterator.hasMore()) {
      const element = iterator.next();
      if (f(element)) {
        newList.push(element);
      }
    }
    return newList;
  }
}
