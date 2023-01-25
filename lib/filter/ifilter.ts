import { IterableCollection } from "../iterator/iterable_collection";

export interface Ifilter {
  filter<I>(collection: IterableCollection<I>, f: (e: I) => boolean): I[];
}
