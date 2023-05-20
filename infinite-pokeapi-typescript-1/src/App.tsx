import { useEffect, useState } from 'react'
import './App.scss'
import { PokemonData, PokemonInfo } from './api-pokemon/types';
import { ApiPokemonService } from './api-pokemon/api-pokemon.service';
import InfiniteScrollWrapper, { InfiniteScrollOnScrollResult } from './components/infinite-scroll-wrapper/InfiniteScrollWrapper';

function App() {

  const apiPokemonService = ApiPokemonService();
  const [count, setCount] = useState<number>();
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [pokeinfos, setPokeInfos] = useState<PokemonInfo[]>([]);
  const [offset, setOffset] = useState<number>();

  useEffect(() => loadPokemons, []);

  function loadPokemons() {
    // Service Call for Get Pokemons
    apiPokemonService.getPokemons(offset)
      .then(json => {
        let $count = json.count;
        let $offset = (offset || 0) + 20;
        let $pokemons = json.results;
        // let $pokemons = [...pokemons, ...json.results];
        setCount($count);
        if ($count && $offset < $count) {
          setOffset($offset);
        }
        else {
          setOffset($count);
        }

        // Service Call for Get Pokemon Infos
        return Promise.all([
          $pokemons,
          Promise.all($pokemons.map((p) => apiPokemonService.getPokemonInfo(p.url)))
        ]);
      })
      .then(responses => {
        setPokemons([...pokemons, ...responses[0]]);
        setPokeInfos([...pokeinfos, ...responses[1]]);
      });
  }

  function onScroll(result: InfiniteScrollOnScrollResult) {
    // Callback from InfiniteScrollWrapper with scroll data
    if (result.reachingBottom && ((!count || !offset) || (offset <= count))) {
      loadPokemons();
    }
  }

  return (
    <div className="App container-fluid pt-4">
      <div className='card'>
        {/* Generic Component to handle scroll management */}
        <InfiniteScrollWrapper onScroll={onScroll}>

          {/* Pokemon List */}
          <ul className="list-group list-group-flush">
            {pokemons.map((pokemon, idx) => (
              <li className="list-group-item" key={idx}>
                <img src={pokeinfos[idx].sprites.front_default} alt="..." className="img-thumbnail">
                </img>
                <span className='ps-2'>{pokemon.name}</span>

              </li>
            ))}
          </ul>
        </InfiniteScrollWrapper>
      </div>
    </div>
  )
}

export default App
