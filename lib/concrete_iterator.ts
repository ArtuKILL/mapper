import { Iterator } from "./iterator";
import { ConcreteCollection } from "./concrete_collection";
import { Person } from "./person";

//More like PersonIterator

export class ConcreteIterator implements Iterator<Person> {
  private _collection: ConcreteCollection;
  private _personId: string;

  constructor(collection: ConcreteCollection, personId: string) {
    this._collection = collection;
    this._personId = personId;
  }

  getNext(): Person {
    throw new Error("Method not implemented.");
  }

  hasMore(): boolean {
    throw new Error("Method not implemented.");
  }
}
