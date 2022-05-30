import { IterableCollection } from "../iterator/iterable_collection";
import { Imapper } from "./imapper";

export class Mapper {
  public static map<I, T>(collection: IterableCollection<I>, f: Function): T[] {
    const iterator = collection.createIterator();
    const list: T[] = [];
    while (iterator.hasMore()) {
      const element = iterator.next();
      list.push(f(element));
    }
    return list;
  }
}
