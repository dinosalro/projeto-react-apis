import axios from "axios";
import { getColors } from "../../utils/ReturnCardColor";
import { getTypes } from "../../utils/ReturnPokemonType";
import pokeball from "../../assets/pngwing 2.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useEffect, useState, useContext } from "react";
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
} from "./Card.styled";

function Card(props) {
  const context = useContext(GlobalContext);
  const { addToPokedex, removeFromPokedex } = context;

  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});

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

  if (pokemon.types != undefined) {
    console.log(pokemon.types[0].type.name);
  }

  return (
    <Container
      color={getColors(
        pokemon.types != undefined ? pokemon.types[0].type.name : "Bug"
      )}
    >
      <div>
        <PokemonNumber>{pokemon.id}</PokemonNumber>
        <PokemonName>{pokemon.name}</PokemonName>
        <TypesContainer>
          {pokemon.types != undefined
            ? pokemon.types.map((type) => {
                return (
                  <PokemonType
                    key={pokemon.id}
                    src={getTypes(type.type.name)}
                    alt=""
                  />
                );
              })
            : null}
        </TypesContainer>
        <p>Detalhes</p>
      </div>
      <div>
        <Pokemon src={pokemon.sprites?.front_default} alt="" />

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
