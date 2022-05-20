export interface Iterator {
  getNext(): void;
  hasMore(): boolean;
}
