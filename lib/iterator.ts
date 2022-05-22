// import { Person } from "./person";

// export interface Iterator {
//   getNext(): Person; // ¿Aqui no hay acoplamiento con las clase concreta Person?
//   hasMore(): boolean;
// }

export interface Iterator<T> {
  next(): T; // Con la ayuda del polimorfismo parametrico, se puede desacoplar de la clase persona.
  hasMore(): boolean;
  current(): T;
}
