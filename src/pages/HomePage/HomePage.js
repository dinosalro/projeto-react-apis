import Card from "../../components/Card/Card";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container } from "./HomePage.styled";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

function HomePage() {
  const context = useContext(GlobalContext);
  const { pokelist, addToPokedex, pokedex, modal } = context;

  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <>
      {modal && <Modal />}
      <Container>
        <Header />
        <h1 className="titulo">Todos os Pokémons</h1>
        <section>
          {filteredPokelist().map((pokemon) => (
            <Card
              key={pokemon.url}
              pokemonUrl={pokemon.url}
              addToPokedex={addToPokedex}
            />
          ))}
        </section>
      </Container>
    </>
  );
}

export default HomePage;
