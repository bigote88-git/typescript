import axios from 'axios'
import { Pokemon } from '../interfaces/pokemon';

export const getPokemon = async( pokeId:number):Promise<Pokemon> => {

    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    
    return data;
    // console.log(resp.data.name);
}