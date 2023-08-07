"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  // Tren
  this.head = null; // Locomotora
  this._length = 0;
}

function Node(value) {
  // Vagones
  this.value = value;
  this.next = null;
}

//
LinkedList.prototype.add = function (valor) {
  let newNode = new Node(valor);
  let current = this.head;

  // insertar un valor en lista vacia
  // !this.head
  if (this.head === null) {
    this.head = newNode;
    this._length++;
    return newNode;
  } else {
    // insertar un valor ene l ultimo nodo de una lista con mas de 1 elemento
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this._length++;
    return newNode;
  }
};

LinkedList.prototype.remove = function () {
  let current = this.head;

  // Retorna null si la lista esta vacia
  if (this._length === 0) return null;

  if (this._length === 1) {
    let aux = current.value;
    this.head = null;
    this._length--;
    return aux;
  }
  while (current.next.next) {
    current = current.next;
  }
  // Sacar ultimo nodo y devolverlo
  let aux = current.next.value;
  current.next = null;
  this._length--;

  return aux;
};

LinkedList.prototype.search = function (valor) {
  let current = this.head;
  if (!current) return null;

  while (current) {
    if (current.value === value) return current.value;
    if (typeof value === "function") {
      if (value(current.value)) {
        return current.value;
      }
    }
    current = current.next;
  }
  return null;
};

let listita = new LinkedList();

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function (key) {
  let suma = 0;
  for (let i = 0; i < key.length; i++) {
    suma += key.charCodeAt(i);
  }
  return suma % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") throw TypeError("Debe ser un string");

  let index = this.hash(key);

  if (this.buckets[index] === undefined) {
    this.buckets[index] = {};
  }
  if (this.hasKey) return "Ya existe ese usuario";
  this.buckets[index][key] = value;
};

HashTable.prototype.get = function (key) {
  let index = this.hash(key);

  if (this.buckets[index][key]) {
    return this.buckets[index][key];
  }
  return "Aqui no hay nada";
};

HashTable.prototype.hasKey = function (key) {
  let index = this.hash(key);

  return this.buckets[index].hasOwnProperty(key);
};

let tablita = new HashTable();

tablita.set("gama", " gama@gmail.com");

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
