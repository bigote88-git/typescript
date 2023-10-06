(()=> {

    // los tipos tienen similitud a las interfaces
    type Person = {
        name: string;
        age: number;
        isalive?: boolean;
        getName?: () => string
    }

    // objeto con definicion de propiedades
    let person1 : Person = {
        name: 'Pepe',
        age: 45,
        isalive: true
    }

    let person2: Person = {
        name: 'Perez',
        age: 12,        
        getName(){
            return this.name
        }
    }

})()