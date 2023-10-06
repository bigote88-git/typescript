(()=> {

    const returnFunction = (a:number, b:number) => a + b;
    const voidFunction = (name:string) => console.log(name) 
    const noParamFunction = () => 'Hello';

    // puedo especificar que es del tipo Function y aceptara cualquier tipo de funcion, o puedo especificar la firma y el retorno para limitar la asignacion
    //* let varFunction: Function(a:number, b:number);
    let varFunction: (x:number, y:number) => number

    varFunction = returnFunction;
    console.log(varFunction(1,2));

    varFunction = voidFunction;
    varFunction('Nanda');

    varFunction = noParamFunction;
    console.log(varFunction()); 
})