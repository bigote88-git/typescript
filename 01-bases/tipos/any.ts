(() => {

    // regla principal: evitar ANY a toda costa
    let variableAny:any;

    // primero soy un string
    variableAny = 'Soy un string'
    console.log((variableAny as string).charAt(0));

    // ahora soy un numero
    variableAny = 658.325689547
    console.log((<number>variableAny).toFixed(2));


})()