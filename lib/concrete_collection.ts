import { Iterator } from "./iterator";
import { ConcreteIterator } from "./concrete_iterator";
import { Person } from "./person";

//PersonCollection

//Esta clase  concreta debe estar acoplada a ciertas clases como en el caso lo son Person y ConcreteIterator.
//A pesar de esto la app nop esta acoplada a estas ya que la clase cumple con la firma de la interfaz Iterator.
export class ConcreteCollection {
  //este array no solo puede ser de Personas si no de otras cosas, no se si puede ser otra cosa que no sea
  //un array (lista) si no como en el caso del quiz un COMPOSITE
  private _persons: Person[];

  constructor(persons: Person[] = []) {
    this._persons = persons;
  }

  // Metodo Factory para crear instancias de iterador.
  public createIterator(): Iterator<Person> {
    return new ConcreteIterator(this);
  }

  public get items(): Person[] {
    return this._persons;
  }

  public get length(): number {
    return this._persons.length;
  }

  public addItem(item: Person): void {
    this._persons.push(item);
  }
}
