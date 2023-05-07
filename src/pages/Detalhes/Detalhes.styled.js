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

export const Box = styled.p`
  background-color: #ffff;
  width: 300px;
  min-height: 250px;
  height: 100%;
  margin: 20px;
  border-radius: 12px;
`;

export const Container = styled.div`
  padding: 16px;
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

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
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
  margin-left: 0;

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
