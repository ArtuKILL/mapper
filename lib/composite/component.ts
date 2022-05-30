//La interfaz describe operaciones que son comunes a elementos simples
//y complejos en el arbol

export interface Component<T> {
  showTree(): string;
  // Metodos para gestionar los hijos del composite
  // La ventaja de tenerlos en la interfaz es que la clase client/main
  // puede crear, añadir y eliminar hijos sin
  // depender de concreciones y solo de abstracciones.
  add(component: Component<T>): void;
  remove(component: Component<T>): void;
  getChildren(): Component<T>[];
  setParent(component: Component<T>): void;
}
