"use strict";
var message = 'Hello world!!!!';
console.log(message);
var hero = {
    name: 'Asdf',
    age: 50
};
console.log(hero.age + 1);
// TIPOS DE DATOS
// VARIABLES VS CONSTANTES
// Las constantes al asignarsele un valor por defecto que en teoria no es posible cambiarlo infiere el tipo del valor asignado
var notChanged = 10;
//  En cambio LET infiere el tipo de dato como ANY cuando no se le especifica el mismo.
var changed;
changed = true;
changed = {};
changed = [];
changed = 100;
// De igual forma con las funciones y sus argumentos
// notImplicitAny : true
function sayHello(message) {
    console.log(message);
}
(function () {
    var number = 10;
    console.log(number);
})();
