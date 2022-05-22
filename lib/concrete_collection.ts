import { Iterator } from "./iterator";
import { ConcreteIterator } from "./concrete_iterator";

//PersonCollection

export class ConcreteCollection {
  public createIterator(personId: string): Iterator {
    return new ConcreteIterator(this, personId);
  }
}
