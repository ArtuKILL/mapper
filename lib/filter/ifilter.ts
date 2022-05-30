export interface Ifilter<I extend IterableCollection, T> {
  filter(collection: I, f: Function): T[];
}
