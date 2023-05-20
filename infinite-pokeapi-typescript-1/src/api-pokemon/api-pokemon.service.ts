import { tFetch } from "./api-service";
import { ApiResponse, PokemonData, PokemonInfo } from "./types";

export function ApiPokemonService() {

    function getPokemons(offset: number = 0, limit: number = 20) {
        const query: any = { 'offset': offset, 'limit': limit };
        const qs = new URLSearchParams(query).toString();
        return tFetch<ApiResponse<PokemonData[]>>(`https://pokeapi.co/api/v2/pokemon?${qs}`);
    }

    function getPokemonInfo(url: string) {
        return tFetch<PokemonInfo>(url);
    }

    return {
        getPokemons,
        getPokemonInfo
    };

}