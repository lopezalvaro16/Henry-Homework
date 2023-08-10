"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array; // El array ya está ordenado
  }

  const pivot = array[0]; // Elegir el primer elemento como pivote
  const izq = [];
  const der = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      izq.push(array[i]);
    } else {
      der.push(array[i]);
    }
  }

  return [...quickSort(izq), pivot, ...quickSort(der)];
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array; // El array ya está ordenado (caso base)
  }

  const mitad = Math.floor(array.length / 2);
  const izq = array.slice(0, mitad);
  const der = array.slice(mitad);

  return merge(mergeSort(izq), mergeSort(der));
}

function merge(izq, der) {
  let resultado = [];
  let i = 0;
  let j = 0;

  while (i < izq.length && j < der.length) {
    if (izq[i] < der[j]) {
      resultado.push(izq[i]);
      i++;
    } else {
      resultado.push(der[j]);
      j++;
    }
  }

  while (i < izq.length) {
    resultado.push(izq[i]);
    i++;
  }

  while (j < der.length) {
    resultado.push(der[j]);
    j++;
  }

  return resultado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
