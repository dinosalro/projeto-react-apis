import styled from "styled-components";

export const ContainerDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5e5e5e;
  width: 100vw;
  min-height: 100vh;
  align-items: center;

  .titulo {
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #ffff;
    min-width: 1400px;
    margin: 50px 0;
  }
`;

export const Barra = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  div {
    position: absolute;
    left: 0;
    height: 10px;
    border-radius: 10px;
  }
`;

export const BoxPokemon = styled.div`
  padding: 20px;
  background-color: #ffff;
  width: 282px;
  height: 282px;
  margin: 20px 20px 0 20px;
  border-radius: 12px;
  display: flex;

  .imgpokemon {
    width: 242px;
  }
`;

export const BoxStats = styled.div`
  width: 343px;
  height: 100%;
  padding: 20px;
  background-color: #ffff;
  color: black;
  margin-top: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  h1 {
    width: 100%;
    margin-bottom: 10px;
  }

  .total {
    display: grid;
    grid-template-columns: 25% 20% 55%;
    width: 100%;
    align-items: center;
    margin-top: 10px;

    p {
      width: 100%;
      font-size: 14px;
      display: flex;
      justify-content: flex-end;
      color: #5d6266;
      align-items: center;
    }
    span {
      font-weight: bolder;
      display: flex;
      justify-content: center;
    }
  }

  .status {
    display: grid;
    grid-template-columns: 25% 20% 55%;
    width: 100%;
    color: #5d6266;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    align-items: center;
    margin-top: 10px;

    span {
      font-weight: bolder;
      display: flex;
      justify-content: center;
    }

    p {
      width: 100%;
      font-size: 14px;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const BoxMoves = styled.div`
  color: black;
  padding: 20px;
  background-color: #ffff;
  width: 300px;
  height: 100%;
  margin: 0 20px;
  border-radius: 12px;

  .movesContainer {
    display: flex;
    align-items: start;
    flex-direction: column;
    .moves {
      margin-top: 10px;
      .move {
        background-color: #ececec;
        border-style: dashed;
        border: dashed 2px rgba(0, 0, 0, 0.14);
        border-radius: 15px;
        padding: 10px;
        width: fit-content;
      }
    }
  }
`;

export const Container = styled.div`
  padding: 16px 16px 36px 16px;

  min-width: 1400px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  height: auto;
  position: relative;
  margin: 0 50px 50px 50px;
  color: #ffffff;

  section {
    display: flex;
    flex-direction: column;
  }
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;
export const Pokeball = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
`;

export const Pokemon = styled.img`
  width: 270px;
  height: 270px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;
`;

export const Infos = styled.div`
  margin: 20px 20px 0 20px;
  padding: 5px;
  .detalhes {
    color: #ffff;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
