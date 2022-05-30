import { Person } from "../person";
import { BaseComponent } from "./base_component";
import { Component } from "./component";

//El contenedor (tambien llamado compuesto) es un elemento que tiene subelementos:
//hojas u otros contenedores. Un contenedor no conoce las clases concretas de sus hijos.
//Funciona con todos los subelementos únicamente a tráves de la interfaz componente
//
//Al recibir una solicitud, un contenedor delega el trabajo a sus subelelementos, procesa
//los resultados intermedios y devuelve el resultado final al cliente.

export class Composite extends BaseComponent<Person> {
  private _children: BaseComponent<Person>[] = [];

  constructor(member: Person) {
    super(member);
  }

  public showTree(): string {
    const children = this._children.map((child) => {
      return child.showTree();
    });
    return `${this._member.name}[${
      this._member.age
    }] -> Children: (${children.join(", ")})`;
  }

  public override add(component: BaseComponent<Person>): void {
    this._children.push(component);
    component.setParent(this);
  }

  public override remove(component: Component<string>): void {
    this._children = this._children.filter((c) => c != component);
  }

  public isComposite(): boolean {
    return true;
  }

  public getChildren(): BaseComponent<Person>[] {
    return this._children;
  }

  public get member(): Person {
    return this._member;
  }
}
