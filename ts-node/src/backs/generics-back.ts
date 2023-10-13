
// import * as HeroUtils from './classes/Hero'
// import IHero, { Hero } from './classes/Hero'

import { genericFunction, printObject, genericArrowFunction } from '../generics/generics';
import { Hero } from '../interfaces/hero';
import { Villain } from '../interfaces/villain';

// console.log('Hola Mundo!!!!!!');

// const hero = new HeroUtils.Hero('papu', 10, 21)
// const hero = new Hero('papu', 10, 21)

// console.log(hero);
// console.log(hero.power);

// GENERICOS

// console.log(genericFunction('hi').toUpperCase());
// console.log(genericFunction(new Date()).getFullYear());
// console.log(genericFunction(123).toFixed(2));

// console.log(genericArrowFunction('valiste papu').split(' ')[1].toUpperCase())

const deadpool = {
    name: 'Deadpool',
    realName: 'WWW',
    dangerLevel: 210
}

console.log(genericFunction<Villain>(deadpool).dangerLevel)