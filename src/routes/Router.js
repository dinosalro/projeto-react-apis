import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import Detalhes from "../pages/Detalhes/Detalhes";
import { GlobalStyle } from "../GlobalStyles.styled";
import Modal from "../components/Modal/Modal";

function Router() {
  const context = useContext(GlobalContext);

  const { pokelist, addToPokedex, pokedex, removeFromPokedex, pokemonNow } =
    context;

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              pokelist={pokelist}
              addToPokedex={addToPokedex}
              pokedex={pokedex}
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              pokedex={pokedex}
              removeFromPokedex={removeFromPokedex}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <Detalhes
              pokemon={pokemonNow}
              pokelist={pokelist}
              removeFromPokedex={removeFromPokedex}
              pokedex={pokedex}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
