import { Person } from "../person";
import { Component } from "./component";

export abstract class BaseComponent<T> implements Component<T> {
  protected _parent: BaseComponent<T> | undefined = undefined;

  abstract showTree(): string;

  public add(component: BaseComponent<T>): void {}
  public remove(component: BaseComponent<T>): void {}

  public isComposite(): boolean {
    return false;
  }

  public get parent(): BaseComponent<T> | undefined {
    return this._parent;
  }

  public setParent(parent: BaseComponent<T>): void {
    this._parent = parent;
  }

  public getParent(): BaseComponent<T> {
    return this._parent!;
  }

  getChildren(): BaseComponent<T>[] {
    return [];
  }
}
