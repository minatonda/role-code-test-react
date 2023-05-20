export interface PokemonData {
    name: string;
    url: string;
}

export interface PokemonInfo {
    name:string;
    order:number;
    base_experience: number;
    sprites: { front_default: string };
}

export interface ApiResponse<T> {
    count: number;
    next: string;
    previous?: any;
    results: T;
}