"use strict";
(() => {
    class Animal {
        constructor(name, color) {
            this.name = name;
            this.color = color;
            console.log('Init abstract animal');
        }
    }
    class Dog extends Animal {
        saludar() {
            return 'Gauu';
        }
    }
    class Cat extends Animal {
        saludar() {
            return 'Miua';
        }
    }
    const luna = new Cat('Luna', 'white');
    console.log(luna.saludar());
    const petGreetings = (pet) => {
        console.log(pet.name);
    };
})();
(() => {
    class Person {
        constructor(name, appe, age, gender) {
            this.name = name;
            this.appe = appe;
            this.age = age;
            this.gender = gender;
        }
        bioghrap() {
            return `${this.name} [${this.appe}]`;
        }
    }
    Person.greeting = 'Hello typescript';
    const dash = new Person('dash', 'cortez', 30);
    console.log(dash);
    console.log(Person.greeting);
    console.log(dash.bioghrap());
})();
(() => {
    class Test {
        constructor() {
            this._val = false;
        }
        set val(val) {
            this._val = val;
        }
        get val() {
            return this._val;
        }
    }
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            console.log('Init person class');
        }
        set gretting(grettingVal) {
            this.greeting = (!grettingVal) ?
                'Defaul gretting' : grettingVal;
        }
        get gretting() {
            return 'Hi, ' + this.greeting;
        }
        toString() {
            return `${this.name} : ${this.age} ages `;
        }
    }
    class Dev extends Person {
        constructor(name, age, alive) {
            super(name, age);
            this.alive = alive;
            console.log(`Init ${this.name} class`);
        }
        devToString() {
            return this.toString().concat(` alive: ${true}`);
        }
    }
    const dashDev = new Dev('Danny', 32, true);
    console.log(dashDev.devToString());
    dashDev.gretting = 'Javadev';
    console.log(dashDev.gretting);
})();
(() => {
    class DBConection {
        constructor(databasename, port) {
            this.databasename = databasename;
            this.port = port;
        }
        static getInstance() {
            if (!this._instance)
                this._instance = new DBConection('test', 5480);
            return this._instance;
        }
    }
    const postgresqlConx = DBConection.getInstance();
    const oracleConx = DBConection.getInstance();
})();
//# sourceMappingURL=main.js.map