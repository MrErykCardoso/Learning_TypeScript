"use strict";
//Variáveis
let x = 50;
let y = 'maria';
x = 60; // reescrita pra let, imutavel pra const;
// x = 'string'; -> erro, não permite mudança de tipo de variavel de forma dinâmica;
console.log(x);
console.log(y);
//inferencia x annotation
let z = 70; //infere automaticamente como number;
let c = 70; //Annotation é o padrão, mais cumprido;
// tipos básicos
let firstName = 'marcelo';
let age = 23;
let isAdmin = true;
console.log(firstName, age, isAdmin);
console.log(typeof firstName);
// Arrays
const numbers = [1, 2, 3];
const clientNames = ['joao', 'maria', 'jose'];
console.log(numbers);
console.log(clientNames);
console.log(numbers.length);
console.log(firstName.toUpperCase());
console.log(clientNames[0].toUpperCase());
numbers.push(4, 5);
//tuplas -> Como um array, mas predefinido com tipos de variáveis diferentes;
let myTuple; //Tipos de variáveis
myTuple = [1, 'nome', [1, 2, 3]];
console.log(myTuple);
//Object Literals -> {propriedade: valor} //porde ser usado para criar um objeto com várias características, porém, travado pela propriedade definida na primeira chave.
const user = {
    name: "marcelo",
    age: 23,
    email: 'takakaranomuro30@gmail.com',
};
//  user.job = 'programador'; Não pode ser adicionado, pois excede as propriedades, mesmo que não fosse variavel "const";
console.log(user);
//
