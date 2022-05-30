import { IterableCollection } from "../iterator/iterable_collection";

export interface Ifilter {
  filter<I>(collection: IterableCollection<I>, f: Function): I[];
}
