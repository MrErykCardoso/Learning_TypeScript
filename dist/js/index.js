"use strict";
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
