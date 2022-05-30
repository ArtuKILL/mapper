import { BaseComponent } from "../lib/composite/base_component";
import { CompositeString } from "../lib/composite/composite_string";
import { LeafString } from "../lib/composite/leaf_string";
import { CompositeCollection } from "../lib/iterator/composite_collection";
import { Mapper } from "../lib/mapper/mapper";

const root = new CompositeString("A");
const B = new CompositeString("B");
const C = new CompositeString("C");
const D = new CompositeString("D");
const E = new LeafString("E");
const F = new LeafString("F");
const G = new CompositeString("G");
const H = new LeafString("H");
const I = new LeafString("I");
const J = new LeafString("J");
const K = new LeafString("K");
const L = new LeafString("L");

B.add(D);
D.add(E);
D.add(F);
D.add(G);
C.add(H);
C.add(I);
C.add(J);
C.add(K);
G.add(L);
root.add(B);
root.add(C);

const collection = new CompositeCollection<string>(root);

const list = Mapper.map(
  collection,
  (element) => element.member + "[" + element.member.length + "] "
);

console.log(list);
