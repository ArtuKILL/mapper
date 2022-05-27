import { Person } from "../lib/person";
import { Component } from "../lib/composite/component";
import { Composite } from "../lib/composite/composite";
import { Leaf } from "../lib/composite/leaf";

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
