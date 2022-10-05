import "./App.css";
import PokemonName from "./components/pokemonName";
import PokemonTypes from "./components/pokemon-types";
import PokemonMoves from "./components/PokemonMoves";

const myName = "SHEIKH";

const pokemonOne = {
  name: "Bulbasaur",
  type: "Grass",
  moves: "Vinewhip",
};

const pokemons = [
  {
    name: "Bulbasaur",
    type: "Grass",
    moves: "Vinewhip",
  },
  {
    name: "Chamander",
    type: "Fire",
    moves: "Flamethrower",
  },
  {
    name: "Squirtle",
    type: "Water",
    moves: "Watergun",
  },
  {
    name: "hello",
    type: "grass",
    moves: "gg",
  }, // javascript can have comma at the end. JSON cannot.
];

//  function App() { // this is class component
const App = () => {
  // this is functional component
  let pokepoke = pokemons.map((x) => {
    return (
      <div>
        <PokemonName pokeName={x.name} />
        <PokemonTypes pokeType={x.type} />
        <PokemonMoves pokeMove={x.moves} />
        <br />
      </div>
    );
  });
  return <div className="App">{pokepoke}</div>;
};

export default App;
