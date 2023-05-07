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
  const { addToPokedex, removeFromPokedex, setPokemonNow } = context;

  const [pokemon, setPokemon] = useState([]);

  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  useEffect(() => {
    fetchPokemon();
  }, []);

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
          <CatchButton onClick={() => addToPokedex(pokemon)}>
            Capturar!
          </CatchButton>
        ) : (
          <CatchButton onClick={() => removeFromPokedex(pokemon)}>
            Remover!
          </CatchButton>
        )}
      </div>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  );
}

export default Card;
