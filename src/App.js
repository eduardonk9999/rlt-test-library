import { useState } from "react";
import { DropDown } from "./components/dropdown/DropDown";

function App() {
  const [selectPokemon, setSlectPokemon] = useState(null)
  return (
    <div className="App">
      {selectPokemon && <div>Seu Pokemon: {selectPokemon}</div>}
      <DropDown
        title="Selecione seu Pokémon Inicial" 
        options={['Bulbasaur', 'Squirtle', 'Charmander']}
        onSelect={setSlectPokemon}
      />
    </div>
  );
}

export default App;
