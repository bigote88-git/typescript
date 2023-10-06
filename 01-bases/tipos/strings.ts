(() => {

    // Formas de definir strings
    const stringComillasSimples:string = 'String random 1'
    const stringComillasDobles:string = "String random 2"
    const stringLiteralTemplate:string = `Hello`

    console.log(`Cadenas dentro de cadenas (${ stringComillasSimples})`)

    // ? : null check
    console.log(stringComillasSimples[20]?.toUpperCase() || 'Cadena no undefined');
    

})()