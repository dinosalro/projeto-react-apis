import Card from "../../components/Card/Card";
import { useContext } from "react";
import Modal from "../../components/Modal/Modal";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container } from "./PokedexPage.styled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";

function PokedexPage() {
  const context = useContext(GlobalContext);
  const { pokedex, removeFromPokedex, modal } = context;

  return (
    <Container>
      {modal && <Modal />}
      <Header />
      <h1 className="titulo">Meus Pokémons</h1>
      <section>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default PokedexPage;
