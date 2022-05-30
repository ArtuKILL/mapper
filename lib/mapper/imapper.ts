import { IterableCollection } from "../iterator/iterable_collection";

export interface Imapper<I, T> {
  map(iterable: IterableCollection<I>, f: Function): T[];
}
