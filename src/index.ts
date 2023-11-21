//Variáveis
let x: number = 50;
let y: string = 'maria';

x = 60; // reescrita pra let, imutavel pra const;
// x = 'string'; -> erro, não permite mudança de tipo de variavel de forma dinâmica;

console.log(x);
console.log(y);

//inferencia x annotation
let z = 70; //infere automaticamente como number;
let c: number = 70; //Annotation é o padrão, mais cumprido;

// tipos básicos
let firstname: string = 'marcelo';
let age: number = 23;
let isAdmin: boolean = true;

console.log(firstname, age, isAdmin);