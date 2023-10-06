(() => {

    enum Skills {
        RUN,
        JUMP,
        SHAKE_THE_TAIL
    }

    type Pet = {
        name:string,
        age:number,
        skill?: Skills[]
    }

    const cat:Pet = {
        name: 'Moon',
        age: 1
    }

    const frog:Pet = {
        name: 'Erosennin',
        age: 10,
        skill: [Skills.JUMP]
    }

    const dog:Pet = {
        name: 'Oddy',
        age: 5,
        skill: [Skills.RUN, Skills.JUMP, Skills.SHAKE_THE_TAIL]
    }

    for (const pet of [cat, frog, dog]) {
        console.log(pet.name, pet.skill)
    }

})()