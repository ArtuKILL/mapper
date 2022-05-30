import { IterableCollection } from "../iterator/iterable_collection";

export interface Imapper {
  map<I, T>(iterable: IterableCollection<I>, f: Function): T[];
}
