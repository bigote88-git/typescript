(()=> {
    // void != null != undefined
    function notReturn():void{
        return undefined;
    }
    const f = notReturn;

    console.log({f});
})()