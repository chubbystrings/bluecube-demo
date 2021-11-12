import styled from "styled-components";

export const TabStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 0.5fr);
  grid-gap: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 3px 10px 0px;
  @media screen and (max-width: 875px) {
    display: none;
  }

  & select {
    padding: 17px 15px;
    text-align: center;
    border: none;
    border-radius: 5px;
    font-family: Mulish;
    cursor: pointer;
    background-color: #fff;
  }
`;
