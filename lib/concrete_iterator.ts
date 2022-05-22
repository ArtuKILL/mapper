import { Iterator } from "./iterator";
import { ConcreteCollection } from "./concrete_collection";
import { Person } from "./person";

//More like PersonIterator

export class ConcreteIterator implements Iterator<Person> {
  private _collection: ConcreteCollection;
  private position: number = 0;

  constructor(collection: ConcreteCollection) {
    this._collection = collection;
  }

  next(): Person {
    const element = this._collection.items[this.position];
    this.position++;
    return element;
  }

  current(): Person {
    return this._collection.items[this.position];
  }

  hasMore(): boolean {
    return this.position >= this._collection.length;
  }
}
