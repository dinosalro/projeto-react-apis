import logo from "../../assets/pokemonlogo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Container } from "./Header.styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function Header() {
  const context = useContext(GlobalContext);
  const { pokemonNow, removeFromPokedex, pokedex } = context;
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const buscaPokemon = pokedex.find((pokemon) => pokemon.id === pokemonNow.id);

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <img src={logo} alt="Logo Pokémon" />
            <button onClick={() => goToPokedexPage(navigate)}>Pokédex</button>
          </>
        );
      case "/pokedex":
        return (
          <>
            <button
              className="returnButton"
              onClick={() => goToHomePage(navigate)}
            >
              &lt; Todos os Pokémons
            </button>
            <img src={logo} alt="Logo Pokémon" />
          </>
        );
      default:
        return (
          <>
            <button
              className="returnButton"
              onClick={() => goToHomePage(navigate)}
            >
              &lt; Todos os Pokémons
            </button>
            <img src={logo} alt="Logo Pokémon" />
            {buscaPokemon ? (
              <button
                className="removeButton"
                onClick={() => removeFromPokedex(pokemonNow)}
              >
                Excluir da Pokédex
              </button>
            ) : null}
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
