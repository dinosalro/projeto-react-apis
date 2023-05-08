import Router from "./routes/Router";
import axios from "axios";
import { BASE_URL } from "./constants/url";
import { useEffect, useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import { GlobalStyle } from "./GlobalStyles.styled";

export default function App() {
  const [pokemonNow, setPokemonNow] = useState({});
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [modal, setModal] = useState(false);
  const [cardModal, setCardModal] = useState(0);
  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?limit=151&offset=0`);
      setPokelist(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };

  const context = {
    pokelist,
    addToPokedex,
    pokedex,
    removeFromPokedex,
    pokemonNow,
    setPokemonNow,
    modal,
    setModal,
    cardModal,
    setCardModal,
  };

  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </>
  );
}
