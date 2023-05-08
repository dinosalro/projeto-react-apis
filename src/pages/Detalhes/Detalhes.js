import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getColors } from "../../utils/ReturnCardColor";
import { getTypes } from "../../utils/ReturnPokemonType";
import pokeball from "../../assets/pngwing 2.png";
import { useContext, useState } from "react";
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
  BoxMoves,
  Barra,
  BoxPokemon,
  BoxStats,
} from "./Detalhes.styled";

const Detalhes = () => {
  const context = useContext(GlobalContext);
  const { pokemonNow, modal } = context;
  let soma = 0;
  for (let i = 0; i < 6; i++) {
    soma += pokemonNow.stats[i].base_stat;
  }

  let i = -1;
  const status = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];

  const [srcImg, setSrcImg] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNow.id}.png`
  );

  const [srcImgBack, setSrcImgBack] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonNow.id}.png`
  );

  const handleMouseOver = () => {
    setSrcImg(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonNow.id}.png`
    );
    setSrcImgBack(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemonNow.id}.png`
    );
  };

  const handleMouseOut = () => {
    setSrcImg(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNow.id}.png`
    );
    setSrcImgBack(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonNow.id}.png`
    );
  };

  return (
    <ContainerDetalhes>
      {modal && <Modal />}
      <Header />
      <h1 className="titulo">Detalhes</h1>
      <Container
        color={getColors(
          pokemonNow.types != undefined ? pokemonNow.types[0].type.name : "bug"
        )}
      >
        <section>
          <BoxPokemon>
            <img
              className="imgpokemon"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              src={srcImg}
            />
          </BoxPokemon>
          <BoxPokemon>
            <img
              className="imgpokemon"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              src={srcImgBack}
            />
          </BoxPokemon>
        </section>
        <section>
          <BoxStats>
            <h1>Base Stats</h1>
            {pokemonNow.stats.map((stats) => {
              i++;
              return (
                <div className="status">
                  <p>{status[i]}</p> <span>{stats.base_stat}</span>
                  <Barra>
                    <div
                      style={{
                        width:
                          stats.base_stat < 101
                            ? `${stats.base_stat}%`
                            : "100%",
                        background:
                          stats.base_stat < 50
                            ? "orange"
                            : stats.base_stat >= 70
                            ? "green"
                            : "yellow",
                      }}
                    />
                  </Barra>
                </div>
              );
            })}
            <div className="total">
              <p>Total</p> <span>{soma}</span>
            </div>
          </BoxStats>
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
          <BoxMoves>
            <h1>Moves:</h1>
            <div className="movesContainer">
              {pokemonNow.moves.slice(0, 5).map((move) => {
                return (
                  <div className="moves">
                    <p className="move">{move.move.name}</p>
                  </div>
                );
              })}
            </div>
          </BoxMoves>
        </section>
        <div>
          <Pokemon
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNow.id}.png`}
            alt=""
          />
        </div>
        <Pokeball src={pokeball} />
      </Container>
    </ContainerDetalhes>
  );
};

export default Detalhes;
