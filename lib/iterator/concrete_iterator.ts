import { Iterator } from "./iterator";
import { ConcreteCollection } from "./concrete_collection";
import { Person } from "../person";

//More like PersonIterator

export class ConcreteIterator implements Iterator<Person> {
  private _collection: ConcreteCollection;
  private _position: number = 0;

  constructor(collection: ConcreteCollection) {
    this._collection = collection;
  }

  public next(): Person {
    const element = this._collection.items[this._position];
    this._position++;
    return element;
  }

  public current(): Person {
    return this._collection.items[this._position];
  }

  public hasMore(): boolean {
    return !(this._position >= this._collection.items.length);
  }

  public key(): number {
    return this._position;
  }
}
