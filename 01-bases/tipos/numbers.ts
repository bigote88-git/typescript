// NaN es considerado un numero en javascript

(() => {

    let numeros = NaN;

    // Un valor no numerico en el constructor de Number generara un valor por defecto de NaN
    numeros = Number('HOLA');
    console.log({numeros});

})();
