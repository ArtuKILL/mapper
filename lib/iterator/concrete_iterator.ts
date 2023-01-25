import { Iterator } from "./iterator";
import { ConcreteCollection } from "./concrete_collection";

//More like PersonIterator

export class ConcreteIterator<T> implements Iterator<T> {
  private _collection: ConcreteCollection<T>;
  private _position: number = 0;

  constructor(collection: ConcreteCollection<T>) {
    this._collection = collection;
  }

  public next(): T {
    const element = this._collection.items[this._position];
    this._position++;
    return element;
  }

  public current(): T {
    return this._collection.items[this._position];
  }

  public hasMore(): boolean {
    return !(this._position >= this._collection.items.length);
  }

  public key(): number {
    return this._position;
  }
}
