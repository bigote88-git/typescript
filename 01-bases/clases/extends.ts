(()=> {

    class Test{

        // GETTER Y SETTER version POO
        private _val:boolean = false;

        set val(val:boolean){
            this._val = val
        }
        get val(){
            return this._val
        }
    }
    
    class Person {

        private greeting?:string;

        constructor(
            public name:string,
            public age:number
        ){
            console.log('Init person class');
        }

        set gretting(grettingVal:string){
            this.greeting = (!grettingVal)?
                'Defaul gretting': grettingVal;            
        }

        get gretting(){
            return 'Hi, ' + this.greeting
        }

        protected toString():string{
            return `${this.name} : ${this.age} ages `
        }
    }

    class Dev extends Person{

        constructor(
            name:string,
            age:number,
            public alive:boolean
        ){
            super(name, age);
            console.log(`Init ${this.name} class`);
        }

        public devToString(){
            return this.toString().concat(` alive: ${true}`)
        }
    }
    
    const dashDev = new Dev('Danny', 32, true);
    console.log(dashDev.devToString());

    dashDev.gretting = 'Javadev'
    console.log(dashDev.gretting)
})()