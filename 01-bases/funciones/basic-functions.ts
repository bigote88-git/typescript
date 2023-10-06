(() => {

    const getRandomNumber = ():number => {
        return Number(Math.random);
    }

    let randomNumber = getRandomNumber();

    console.log(randomNumber);
})()