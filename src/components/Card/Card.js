import axios from "axios";
import { getColors } from "../../utils/ReturnCardColor";
import { getTypes } from "../../utils/ReturnPokemonType";
import pokeball from "../../assets/pngwing 2.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useEffect, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import {
  Container,
  PokemonNumber,
  PokemonName,
  PokemonType,
  TypesContainer,
  Pokeball,
  CatchButton,
  Pokemon,
  Infos,
} from "./Card.styled";

function Card(props) {
  const context = useContext(GlobalContext);
  const {
    addToPokedex,
    removeFromPokedex,
    setPokemonNow,
    pokemonNow,
    setModal,
    setCardModal,
  } = context;

  const [pokemon, setPokemon] = useState([]);
  const [response, setResponse] = useState({});
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("pokemon", JSON.stringify(pokemonNow));
    const storedPokemon = window.localStorage.getItem("pokemon");
    setResponse(storedPokemon ? JSON.parse(storedPokemon) : {});
  }, [pokemonNow]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(props.pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  function HandleClick() {
    setPokemonNow(pokemon);
    goToDetailsPage(navigate, pokemon.id);
  }

  function openModalAdd() {
    setModal(true);
    addToPokedex(pokemon);
    setCardModal(1);
  }

  function openModalRemove() {
    setModal(true);
    removeFromPokedex(pokemon);
    setCardModal(0);
  }

  return (
    <Container
      color={getColors(
        pokemon.types != undefined ? pokemon.types[0].type.name : "bug"
      )}
    >
      <Infos>
        <PokemonNumber>#{pokemon.id}</PokemonNumber>
        <PokemonName>{pokemon.name}</PokemonName>
        <TypesContainer>
          {pokemon.types != undefined
            ? pokemon.types.map((type) => {
                return (
                  <PokemonType
                    key={type.id}
                    src={getTypes(type.type.name)}
                    alt=""
                  />
                );
              })
            : null}
        </TypesContainer>
        <button className="detalhes" onClick={() => HandleClick()}>
          Detalhes
        </button>
      </Infos>
      <div>
        <Pokemon
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt=""
        />

        {location.pathname === "/" ? (
          <CatchButton onClick={() => openModalAdd()}>Capturar!</CatchButton>
        ) : (
          <CatchButton onClick={() => openModalRemove()}>Remover!</CatchButton>
        )}
      </div>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  );
}

export default Card;
