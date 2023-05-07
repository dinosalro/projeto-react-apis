import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: #5e5e5e;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  .titulo {
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #ffff;
    min-width: 1400px;
    margin: 50px 0;
  }

  section {
    max-width: 1400px;
    display: grid;
    align-items: center;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
  }
`;
