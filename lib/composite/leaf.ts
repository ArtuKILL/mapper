import { Person } from "../person";
import { BaseComponent } from "./base_component";
import { Component } from "./component";

// La hoja es un elemento básico que no tiene subelementos
// Elemento terminal

//Normalmente los componentes de la hoja son los que acaba realizando
//la mayoría del trabajo real, ya que no tienen  a nadie a quien delegarle
//el trabajo.

export class Leaf extends BaseComponent<Person> {
  private _member: Person;

  constructor(member: Person) {
    super();
    this._member = member;
  }

  public showTree(): string {
    return `${this._member.name}[${this._member.age}]`;
  }

  //Esta clase hereda algunos metodos de la interfaz que se encargan de la gestión
  //de los hijos dle composite, en esta clase los hereda vacio.
}
