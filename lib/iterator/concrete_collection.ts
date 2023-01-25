import { Iterator } from "./iterator";
import { ConcreteIterator } from "./concrete_iterator";
import { Person } from "../person";
import { IterableCollection } from "./iterable_collection";

//PersonCollection

//Esta clase  concreta debe estar acoplada a ciertas clases como en el caso lo son Person y ConcreteIterator.
//A pesar de esto la app nop esta acoplada a estas ya que la clase cumple con la firma de la interfaz Iterator.
//NOTE: Creo que se puede hacer más generico, tengo dudas si vale la pena
//HINT: class ConcreteCollection implements IterableCollection<Person>
//      -> class ConcreteCollection<List<T>> implements IterableCollection<T> ¿?
// No se si compilel, solo es una revisión del códido
export class ConcreteCollection implements IterableCollection<Person> {
  //este array no solo puede ser de Personas si no de otras cosas, no se si puede ser otra cosa que no sea
  //un array (lista) si no como en el caso del quiz un COMPOSITE
  private _persons: Person[];

  constructor(persons: Person[] = []) {
    this._persons = persons;
  }

  // Metodo Factory para crear instancias de iterador.
  //es el único q pertenece en si al patrón. a
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
//a
