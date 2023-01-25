import { BaseComponent } from "../lib/composite/base_component";
import { Component } from "../lib/composite/component";
import { Composite } from "../lib/composite/composite";
import { Leaf } from "../lib/composite/leaf";
import { Filter } from "../lib/filter/filter";
import { CompositeCollection } from "../lib/iterator/composite_collection";
import { ConcreteCollection } from "../lib/iterator/concrete_collection";
import { Mapper } from "../lib/mapper/mapper";
import { Person } from "../lib/person";
import { App } from "./app";

//Personas de una lista
const persons: Person[] = [
  new Person("Arturo Lecuona", 23),
  new Person("Rabindra Harichand", 22),
  new Person("Manuel De Olival", 23),
  new Person("Jesús Soares", 22),
];

//Personas que va a pertenecer al árbol
const mama = new Person("Ines", 60);
const arturo = new Person("Arturo", 23);
const andrea = new Person("Andrea", 25);
const hijo1 = new Person("Pedrito", 4);
const hijo2 = new Person("Valeria", 2);

//Se crean los nodos del árbol
const root = new Composite(mama);
const branch1 = new Leaf(arturo);
const branch2 = new Composite(andrea);

//Se agregan los nodos a la rama2 (Andrea)
branch2.add(new Leaf(hijo1));
branch2.add(new Leaf(hijo2));

//Se agrega rama1 (Arturo) y rama2 (Andrea) a la raiz (Ines)
root.add(branch1);
root.add(branch2);

//Código cliente que solo hace uso de la interfaz componente
function clientCode<T>(component: Component<T>) {
  console.log(`Result: ${component.showTree()}`);
}

// clientCode(root);

// Se crean las colecciones de las respectivas estructuras de datos
const collection = new ConcreteCollection(persons);
const compositeCollection = new CompositeCollection(root);

// Se crean objetos de App y se les pasa por inyección de dependencias por constructor la collección.
const app = new App<Person>(collection);
const app2 = new App<BaseComponent<Person>>(compositeCollection);

// app.showCollection();
// app2.showCollection();

// Mapper de una lista
const list = Mapper.map(compositeCollection, (element) => {
  return element.member.age * 2;
});

let mapper = new Mapper();

// Mapper de un composite
const list2 = mapper.map(collection, (element) => {
  return element.age + " edad";
});

// Filter de una lista
const filteredList = Filter.filter(collection, (element) => {
  return !(element.age % 2);
});

// Filter de un árbol de componentes (Patrón composite)
const filteredTree = Filter.filter(compositeCollection, (element) => {
  return element.member.age % 2 !== 0;
});

// console.log(list);
console.log(list2);
console.log(filteredList);
console.log(filteredTree);
