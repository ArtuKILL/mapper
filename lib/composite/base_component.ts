import { Component } from "./component";

export abstract class BaseComponent<T> implements Component<T> {
  protected _parent: BaseComponent<T> | undefined = undefined;

  protected _member: T;

  abstract showTree(): string;

  constructor(member: T) {
    this._member = member;
  }

  public add(component: BaseComponent<T>): void {}
  public remove(component: BaseComponent<T>): void {}

  public get parent(): BaseComponent<T> | undefined {
    return this._parent;
  }

  public setParent(parent: BaseComponent<T>): void {
    this._parent = parent;
  }

  public getParent(): BaseComponent<T> {
    return this._parent!;
  }

  public getChildren(): BaseComponent<T>[] {
    return [];
  }

  public get member(): T {
    return this._member;
  }
}
