import { IterableCollection } from "../iterator/iterable_collection";

export interface Imapper<I, T> {
  map<I, T>(iterable: IterableCollection<I>, f: (e: I) => T): T[];
}
