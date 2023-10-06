(() => {
    
    const fullName = (firstName:string, lastName?:string, upper:boolean = false) => {

        if(upper)        
            return `${firstName} ${lastName} || no provided`.toUpperCase();
        else
        return `${firstName} ${lastName} || no provided`.toUpperCase();
    }

    console.log(fullName('Name', true));

})()