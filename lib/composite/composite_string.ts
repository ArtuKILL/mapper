import { BaseComponent } from "./base_component";

export class CompositeString extends BaseComponent<string> {
  private _children: BaseComponent<string>[] = [];

  constructor(member: string = "") {
    super(member);
  }

  public add(component: BaseComponent<string>): void {
    this._children.push(component);
    component.setParent(this);
  }

  public remove(component: BaseComponent<string>): void {
    this._children = this._children.filter((c) => c != component);
  }

  public isComposite(): boolean {
    return true;
  }

  public showTree(): string {
    const children = this._children.map((child) => {
      return child.showTree();
    });
    return `${this._member}[${
      this._member.length
    }] -> Children: (${children.join(", ")})`;
  }

  public get member(): string {
    return this._member;
  }

  public getChildren(): BaseComponent<string>[] {
    return this._children;
  }
}
