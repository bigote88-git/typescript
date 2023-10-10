"use strict";
(() => {
    const client1 = {
        name: 'fsdfsd',
        address: {
            id: 123,
            zip: '3658',
            street: 'figther'
        },
        getFullAddress() { }
    };
    const client2 = {
        name: 'supplier',
        address: {
            id: 456,
            zip: '3658',
            street: 'figther'
        },
        getFullAddress(id) {
        },
    };
})();
(() => {
    class Dog {
        constructor(name) {
            this.name = name;
        }
        run() {
            console.log('I am running');
        }
    }
    const gobi = new Dog('gobi');
    gobi.run();
})();
(() => {
    let functionSum;
    functionSum = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map