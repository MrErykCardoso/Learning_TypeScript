"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class User {
    name;
    role;
    isAdmin;
    constructor(name, role, isAdmin) {
        this.name = name;
        this.role = role;
        this.isAdmin = isAdmin;
    }
    showUserName() {
        console.log(`Nome do Usuário: ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O nível de usuário é ${this.role}`);
        }
        else {
            console.log(`Acesso negado!`);
        }
    }
}
const joaozinho = new User('Joaozinho', "Admin", true);
console.log(joaozinho);
joaozinho.showUserName();
joaozinho.showUserRole(false);
class vehicle {
    brand;
    whell;
    maxSpeed;
    constructor(brand, whell, maxSpeed) {
        this.brand = brand;
        this.whell = whell;
        this.maxSpeed = maxSpeed;
    }
    showBrand() {
        console.log(`A marca do vehículo é ${this.brand}.`);
    }
}
const fiatUnoDeFirma = new vehicle('Fiat', 16, 'luz');
console.log(fiatUnoDeFirma);
fiatUnoDeFirma.showBrand();
class superCar extends vehicle {
    engine;
    constructor(brand, wheel, maxSpeed, engine) {
        super(brand, wheel, maxSpeed);
        this.engine = engine;
    }
}
const Veiron = new superCar('Bugati', 20, '300km/h', 'v8');
console.log(Veiron);
Veiron.showBrand();
console.log('hello');
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let person = class person {
    name;
    constructor(name) {
        this.name = name;
    }
};
person = __decorate([
    BaseParameters()
], person);
const sam = new person('Sam');
console.log(sam);
