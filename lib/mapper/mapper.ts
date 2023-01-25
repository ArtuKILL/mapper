import { IterableCollection } from "../iterator/iterable_collection";
import { Imapper } from "./imapper";

export class Mapper<I, T> implements Imapper<I, T> {
  map<I, T>(iterable: IterableCollection<I>, f: (e: I) => T): T[] {
    return Mapper.map(iterable, f);
  }

  public static map<I, T>(
    collection: IterableCollection<I>,
    f: (e: I) => T
  ): T[] {
    const iterator = collection.createIterator();
    const list: T[] = [];
    while (iterator.hasMore()) {
      const element = iterator.next();
      list.push(f(element));
    }
    return list;
  }
}
