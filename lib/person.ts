export class Person {
  private _name: string;
  private _age: number;
  private _id: string;

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get age() {
    return this._age;
  }
}
