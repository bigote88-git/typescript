(()=>{

    console.log({a});

    var a;
    let a:string = 'random value'

    const myFunction = () => {
        console.log(undefined);
    }

    myFunction = function(){
        console.log(null)
    }

    myFunction();    

})()