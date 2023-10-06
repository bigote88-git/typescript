(()=> {
    
    class Person {
        // private name:string;
        // private appe:string;
        // private age:number;
        // public gender?:string;
        static greeting:string = 'Hello typescript';

        // constructor(name:string, appe:string, age:number, gender:string = 'M'){
        //     this.name = name;
        //     this.appe = appe;
        //     this.age = age;
        //     this.gender = gender;
        // }
        constructor(
            private name:string,
            private appe:string,
            private age:number,
            public gender?:string){
            }

        public bioghrap(){
            return `${this.name} [${this.appe}]`
        }

        
    }

    const dash = new Person('dash', 'cortez', 30);
    console.log(dash);
    console.log(Person.greeting);

    console.log(dash.bioghrap());


})()