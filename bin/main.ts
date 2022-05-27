import { BaseComponent } from "../lib/composite/base_component";
import { Component } from "../lib/composite/component";
import { Composite } from "../lib/composite/composite";
import { Leaf } from "../lib/composite/leaf";
import { CompositeCollection } from "../lib/iterator/composite_collection";
import { ConcreteCollection } from "../lib/iterator/concrete_collection";
import { Person } from "../lib/person";
import { App } from "./app";

const persons: Person[] = [
  new Person("Arturo Lecuona", 23),
  new Person("Rabindra Harichand", 22),
  new Person("Manuel De Olival", 23),
  new Person("Jesús Soares", 22),
];

const mama = new Person("Ines", 60);
const arturo = new Person("Arturo", 23);
const andrea = new Person("Andrea", 25);
const hijo1 = new Person("Pedrito", 4);
const hijo2 = new Person("Valeria", 2);

function clientCode<T>(component: Component<T>) {
  console.log(`Result: ${component.showTree()}`);
}

const tree = new Composite(mama);
const branch1 = new Leaf(arturo);
const branch2 = new Composite(andrea);
branch2.add(new Leaf(hijo1));
branch2.add(new Leaf(hijo2));

tree.add(branch1);
tree.add(branch2);

clientCode(tree);

const collection = new ConcreteCollection(persons);
const compositeCollection = new CompositeCollection(tree);

const iterator = collection.createIterator();

const app = new App<Person>(collection);
const app2 = new App<BaseComponent<Person>>(compositeCollection);

app.showCollection();
app2.showCollection();
