import { BaseComponent } from "../composite/base_component";
import { CompositeIterator } from "./composite_iterator";
import { IterableCollection } from "./iterable_collection";
import { Iterator } from "./iterator";

export class CompositeCollection<T>
  implements IterableCollection<BaseComponent<T>>
{
  private _root: BaseComponent<T>;

  constructor(root: BaseComponent<T>) {
    this._root = root;
  }

  public createIterator(): Iterator<BaseComponent<T>> {
    return new CompositeIterator(this);
  }

  public get root(): BaseComponent<T> {
    return this._root;
  }
}
