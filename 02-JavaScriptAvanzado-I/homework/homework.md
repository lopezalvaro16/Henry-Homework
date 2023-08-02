# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a); // 8
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 8
      b = c;
      var x = 5;
   };
   f(a, b, c); // 8, 9, 10
   console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); //Imprime: undefined
console.log(baz); // Error: ReferenceError
foo(); // "Hola"
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // Imprime "Franco"
```

```javascript
var instructor = 'Tony'; 
console.log(instructor);// Imprime "Tony"
(function () {
   if (true) {
      var instructor = 'Franco'; 
      console.log(instructor);// Imprime "Franco"
   }
})();
console.log(instructor); // Imprime "Tony"
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // Imprime "The flash"
   console.log(pm); // "Reverse Flash"
}
console.log(instructor); // Imprime "The flash"
console.log(pm); // Imprime "Franco"
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // "2"
"4px" - 2 // Nan
7 / 0 // Infinity
{}[0] // Undefined
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] //23
3>2>1 //False
[] == ![] //True
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //Undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}
// undefined porque la var no esta inicializada cuando se lla a la funcion.
// 2, porque cuando llamamos a test dentro de la funcion aclara que foo oertenece a otra funcion por lo que js va a buscar donde se encuentra ese valor
test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}
getFood(false); undefined
//undefined porque el parametro false no esta definido. nunca entra al if porque da por sentado que es falso

```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa


var test = obj.prop.getFullname;

console.log(test()); // Undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing(); // 1, 4, 3, 2

```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
