import axios from 'axios';
import { Move, PokeapiReponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
    get imageUrl(): string { // siempre el get debe retornar algo
        return `https://pokemon.com/${this.id}.jpg`; // el this dentro de la clase apunta a un instancia de la clase
    }

    //* Forma explicita
    // public id: number;
    // public name: string;

    constructor(
        //* Forma corta
        public readonly id: number, //readonly hace que no pueda cambiar el id
        public name: string,
        // Todo: inyectar dependencias

    ) { }

    scream() { //por defecto son public
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() { //por defecto son public
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiReponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);

        return data.moves;
    }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.getMoves();