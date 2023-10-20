/*import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
    .then(pokemon => console.log(pokemon.sprites.front_shiny))
    .catch(error => {
        throw new Error(error)
    })
    .finally(()=> console.log('Listo papu'))
*/

import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon('charmander');
//(Pokemon.prototype as any).customProp = 'te hackee'
charmander.saveToDB(0);

charmander.apiUrl = '';

//console.log(charmander);