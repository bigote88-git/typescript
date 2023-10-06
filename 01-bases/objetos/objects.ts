(() => {

    // objetos literales
    let dev = {
        name: 'senior dev',
        age: 1,
        skill: ['java', 'spring', 'react']
    }

    dev = {
        name: 'senior dev',
        age: 5,
        skill: ['java', 'spring', 'react']
    }

    // objeto con definicion de propiedades
    let definedObject : { 
        name: string, age: number, isalive: boolean,
    getName?:() => string } = {
        name: 'Pepe',
        age: 45,
        isalive: true
    }

    definedObject = {
        name: 'Perez',
        age: 12,
        isalive: true,
        getName(){
            return this.name
        }
    }

    console.log(definedObject);
})()