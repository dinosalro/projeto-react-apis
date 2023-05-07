import styled from "styled-components";

export const Container = styled.header`
  height: 160px;
  width: 100%;
  background-color: white;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  img {
    height: 113px;
    grid-column: 2;
  }

  .returnButton {
    height: 57px;
    background-color: transparent;
    color: black;
    text-decoration: underline;
    font-weight: 700;
    size: 24px;
    line-height: 36px;
  }

  .removeButton {
    height: 57px;
    width: 287px;
    border-radius: 8px;
    padding: 4px 10px 4px 10px;
    background-color: #ff6262;
    border: none;
    color: white;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
  }

  button {
    height: 57px;
    width: 287px;
    border-radius: 8px;
    padding: 4px 10px 4px 10px;
    background-color: #33a4f5;
    border: none;
    color: white;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
  }
`;
