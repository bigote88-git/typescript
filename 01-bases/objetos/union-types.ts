(()=> {
    type Person = {
        name: string;
        age: number;
        isalive?: boolean;
        getName?: () => string
    }

    let multipleTypeVar: (string | number | boolean | Person);

    multipleTypeVar = 'string';
    console.log(typeof multipleTypeVar);
    
    multipleTypeVar = 123456;
    console.log(typeof multipleTypeVar);
    
    multipleTypeVar = { 
        name: '',
        age: 1,        
    };
    console.log(typeof multipleTypeVar);

})()
