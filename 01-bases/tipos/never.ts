
(()=> {

    // never indica que la funcion no tendra un operacion exitosa como resultado, es decir tiene que reventar si o si
    const neverSayNever = ():never => {

        throw new Error('Chusting....');
    }

    neverSayNever();
    console.log('After of the fall who is that remain');
})()