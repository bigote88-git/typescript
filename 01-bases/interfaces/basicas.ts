(()=> {

    // las interfaces son extensible, los tipos no, las interfaces no tienen contraparte en javascript
    interface Hero {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string
    }

    // multiples interfaces
    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress: (id:number) => void
    }

    interface Address {
        id: number,
        zip: string,
        street: string
    }

    const client1: Client = {
        name: 'fsdfsd',
        address: {
            id: 123,
            zip: '3658',
            street: 'figther'
        },
        getFullAddress(){}
    }

    const client2: Client = {
        name: 'supplier',
        address: {
            id: 456,
            zip: '3658',
            street: 'figther'
        },
        getFullAddress(id) {
            
        },
    }

    
})()