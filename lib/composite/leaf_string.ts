import { BaseComponent } from "./base_component";

export class LeafString extends BaseComponent<string> {
  constructor(member: string) {
    super(member);
  }

  public showTree(): string {
    return `${this._member}[${this._member.length}]`;
  }

  public get member(): string {
    return this._member;
  }
}
