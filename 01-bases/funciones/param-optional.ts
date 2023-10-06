(() => {
    
    const fullName = (firstName:string, lastName?:string) => {

        return `${firstName} ${lastName} || no provided`;
    }

    console.log(fullName('Name',));

})()