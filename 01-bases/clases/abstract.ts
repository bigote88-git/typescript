(()=> {
    
    abstract class Animal {
        constructor(
            public name:string,
            public color:string
        ){ 
            console.log('Init abstract animal');          
        }
    }
    class Dog extends Animal{
        saludar():string{
            return 'Gauu'
        }
    }

    class Cat extends Animal{
        saludar():string{
            return 'Miua'
        }
    }

    const luna = new Cat('Luna', 'white');
    console.log(luna.saludar());

    const petGreetings = (pet:Animal):void => {
        console.log(pet.name);
    }

})()