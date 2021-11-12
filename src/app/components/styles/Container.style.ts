import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

  @media screen and (max-width: 1075px) {
    grid-template-columns: 1fr;
}
`;
