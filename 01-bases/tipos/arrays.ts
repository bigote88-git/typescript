(() => {

    // podemos definir un array con varios tipo de datos permitidos
    const anyValues: (string | number | boolean)[] = [1,2,3, '7', false]

    // lo correcto es usar el tipado que nos brinda typescript
    const numbers: number[] = [1,2,3,4,5,6,7,8,9]

    numbers.forEach(printVal);

    function printVal(val:number){
        console.log(`Printing ${val}`)
    }

})()