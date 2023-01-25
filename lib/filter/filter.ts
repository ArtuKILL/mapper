import { IterableCollection } from "../iterator/iterable_collection";
import { Ifilter } from "./ifilter";

export class Filter implements Ifilter {
  filter<I>(collection: IterableCollection<I>, f: (e: I) => boolean): I[] {
    return Filter.filter(collection, f);
  }
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
