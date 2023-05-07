import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getColors } from "../../utils/ReturnCardColor";
import { getTypes } from "../../utils/ReturnPokemonType";
import pokeball from "../../assets/pngwing 2.png";
import { useContext } from "react";
import {
  Container,
  PokemonNumber,
  PokemonName,
  PokemonType,
  TypesContainer,
  Pokeball,
  Pokemon,
  Infos,
  ContainerDetalhes,
  Box,
} from "./Detalhes.styled";

const Detalhes = () => {
  const context = useContext(GlobalContext);
  const { pokemonNow } = context;
  return (
    <ContainerDetalhes>
      <Header />
      <h1 className="titulo">Detalhes</h1>
      <Container
        color={getColors(
          pokemonNow.types != undefined ? pokemonNow.types[0].type.name : "bug"
        )}
      >
        <section>
          <Box>a</Box>
          <Box>a</Box>
        </section>
        <section>
          <Box>a</Box>
        </section>
        <section>
          <Infos>
            <PokemonNumber>#{pokemonNow.id}</PokemonNumber>
            <PokemonName>{pokemonNow.name}</PokemonName>
            <TypesContainer>
              {pokemonNow.types != undefined
                ? pokemonNow.types.map((type) => {
                    return (
                      <PokemonType
                        key={pokemonNow.id}
                        src={getTypes(type.type.name)}
                        alt=""
                      />
                    );
                  })
                : null}
            </TypesContainer>
          </Infos>
          <Box>a</Box>
        </section>
        <div>
          <Pokemon
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNow.id}.png`}
            alt=""
          />
        </div>
        <Pokeball src={pokeball} alt="pokeball" />
      </Container>
    </ContainerDetalhes>
  );
};

export default Detalhes;
