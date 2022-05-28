import { IterableCollection } from "../iterator/iterable_collection";

export interface Imapper<I extends IterableCollection<I>, T> {
  map(iterable: I, f: Function): T[];
}
