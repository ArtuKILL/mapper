import { Iterator } from "./iterator";
import { CompositeCollection } from "./composite_collection";
import { BaseComponent } from "../composite/base_component";
import { Stack } from "../stack/stack";

export class CompositeIterator<T> implements Iterator<BaseComponent<T>> {
  private _stack: Stack<BaseComponent<T>> = new Stack<BaseComponent<T>>();

  constructor(compositeCollection: CompositeCollection<T>) {
    this._stack.push(compositeCollection.root);
  }

  next(): BaseComponent<T> {
    if (this._stack.isEmpty()) {
      throw new Error("No more elements - stack is empty");
    }

    const node: BaseComponent<T> | undefined = this._stack.pop();

    if (!node) {
      throw new Error("Undefined node");
    }

    node.getChildren().forEach((child) => this._stack.push(child));

    return node;
  }

  hasMore(): boolean {
    return !this._stack.isEmpty();
  }

  key(): number {
    throw new Error("Method not implemented.");
  }
}
