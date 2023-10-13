
export class Hero {
    constructor(
        public name:string,
        public powerId:number,
        public age:number
    ){}
    // get power() {
    //     return powers.find(power => power.id === this.powerId).desc || 'not found '
    // }
}

interface IHero {
    attack():void
}

export default IHero;