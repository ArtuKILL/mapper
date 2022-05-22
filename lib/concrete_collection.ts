import { Iterator } from "./iterator";
import { ConcreteIterator } from "./concrete_iterator";
import { Person } from "./person";

//PersonCollection

export class ConcreteCollection {
  public createIterator(personId: string): Iterator<Person> {
    return new ConcreteIterator(this, personId);
  }
}
