import { Person } from "./person";

export interface Iterator {
  getNext(): Person; // ¿Aqui no hay acoplamiento con las clase concreta Person?
  hasMore(): boolean;
}
