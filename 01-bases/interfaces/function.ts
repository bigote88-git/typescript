(()=> {
    
    // se puede usar una interface para definir la firma de una funcion
    interface ArithmeticSum{
        (value1: number, value2: number) : number;
    }

    let functionSum: ArithmeticSum;

    functionSum = (a:number, b:number) =>{
        return a + b;
    }
})()