"use strict";
//Variáveis
let x = 50;
let y = 'maria';
x = 60; // reescrita pra let, imutavel pra const;
// x = 'string'; -> erro, não permite mudança de tipo de variavel de forma dinâmica;
console.log(x);
console.log(y);
//--------------------------------------------------------------------------------------------
//inferencia x annotation
let z = 70; //infere automaticamente como number;
let c = 70; //Annotation é o padrão, mais cumprido;
//--------------------------------------------------------------------------------------------
// tipos básicos
let firstName = 'marcelo';
let age = 23;
let isAdmin = true;
console.log(firstName, age, isAdmin);
console.log(typeof firstName);
//--------------------------------------------------------------------------------------------
// Arrays
const numbers = [1, 2, 3];
const clientNames = ['joao', 'maria', 'jose'];
console.log(numbers);
console.log(clientNames);
console.log(numbers.length);
console.log(firstName.toUpperCase());
console.log(clientNames[0].toUpperCase());
numbers.push(4, 5);
//--------------------------------------------------------------------------------------------
//tuplas -> Como um array, mas predefinido com tipos de variáveis diferentes;
let myTuple; //Tipos de variáveis
myTuple = [1, 'nome', [1, 2, 3]];
console.log(myTuple);
//--------------------------------------------------------------------------------------------
//Object Literals -> {propriedade: valor} //porde ser usado para criar um objeto com várias características, porém, travado pela propriedade definida na primeira chave.
const user = {
    name: "marcelo",
    age: 23,
    email: 'takakaranomuro30@gmail.com',
};
//  user.job = 'programador'; Não pode ser adicionado, pois excede as propriedades, mesmo que não fosse variavel "const";
console.log(user);
//Object but Unior type -> uma forma de expandir a forma de object literals
let id; //aqui se declara a variável com mais de uma tipologia
id = 'almanaque';
id = 10; //ela pode levar valores de mais de um tipo
let nome = 'Marcelo';
let idade = 23;
let isAdm = true; //observe como o tipo criado carrega todos os tipos declarados sem problema;
// let numerosFavoritos: myIdType = [1,2,3]; exceto aos que excedem os tipos especificados na criação
//--------------------------------------------------------------------------------------------
// enum -> pode ser usado para encurtar a utilização e declaração de variáveis que se repetem
var size;
(function (size) {
    size["p"] = "pequeno";
    size["m"] = "m\u00E9dio";
    size["g"] = "grande";
})(size || (size = {}));
const camisa = {
    nome: "camisa kkk",
    size: size.g,
};
console.log(camisa); //a saída da variável "size" de camisa fica com o valo de g em "enum size";
//--------------------------------------------------------------------------------------------
// Literal types -> criar uma variável instantânea que acompanha a variável. Apenas pode ser auterada para a variável declarada;
let literal; //pode ser usado em conjunto com o "null" para variar entre os dois tipos
// literal = "outro tipo ou valor qualquer" -> não funciona;
literal = null;
literal = "autenticado"; //apenas
//--------------------------------------------------------------------------------------------
//funçoes
function soma(a, b) {
    return a + b; //lembre sempre de específicar os timos das variáveis recebias.
}
console.log(soma(5, 5));
function sayHelloTo(name) {
    return `Hello to ${name}`; //strings com váriáveis pelo meio usam ``
}
console.log(sayHelloTo('Marcelo'));
function logger(msg) {
    console.log(msg); //apesar de o "console.log" retornar para o terminal ele não retorna nenhum valor ao código, por isso a função é vazia
}
logger('não retorno nada');
