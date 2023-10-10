(()=> {
    
    interface Animal {
        name: string,
        age?: number,        
    }

    interface Skill {
        run?: () => void
        fly?: () => void
        swin?: () => void
    }

    class Dog implements Animal, Skill {
        public name:string;
        public age?:number;

        constructor(name:string){
            this.name = name
        }

        public run():void{
            console.log('I am running');
        }
    }

    const gobi:Dog = new Dog('gobi');
    gobi.run();    

})()