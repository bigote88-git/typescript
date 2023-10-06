(() => {

    // los parametros en typescript al especificar el tipo son obligatorios
    const fullName = (firstName:string, lastName:string) => {

        return `${firstName} ${lastName}`;
    }

    console.log(fullName('', ''));

})()