(() => {


    class Person {
        name;
        age;

        constructor(name = 'Junior', age = 0) {
            this.name = name;
            this.age = age;

            console.log('New person...');
        }
    }

    const pepito = new Person();
    console.log({ pepito });

    class Dev extends Person {
        stack;

        constructor(name, age, stack) {
            super(name, age);
            this.stack = 'JS'

            console.log('New dev has born');
        }
    }

    const richard = new Dev('bugscript');

})()