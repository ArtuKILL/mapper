import { v4 as uuidv4 } from "uuid";
export class Person {
  private _name: string;
  private _age: number;
  private _id: string;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
    this._id = uuidv4();
  }

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
