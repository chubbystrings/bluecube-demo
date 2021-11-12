import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  & input {
    border: none;
    outline: none;
    padding: 20px 20px;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 3px 10px 0px;
    border-radius: 5px;
  }

  & button {
    padding: 10px 20px;
    border: none;
    outline: none;
    background-color: var(--secondary);
    position: absolute;
    top: 10px;
    right: calc(2% - 1px);
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    color: #fff;
    transition: all 0.5s ease-out;
    cursor: pointer;
  }

  @media screen and (max-width: 925px) {
    width: 640px;
    & input {
      width: 640px;
      
    }
  }

  @media screen and (max-width: 875px) {
    width: 640px;
    margin: 0 auto;
    & input {
      width: 640px;
      
    }
  }

  @media screen and (max-width: 765px) {
      width: 630px;
    & input {
      width: 630px;
    }
  }

  @media screen and (max-width: 705px) {
      width: 430px;
    & input {
      width: 430px;
    }
  }

  @media screen and (max-width: 508px) {
    width: 330px;
    & input {
      width: 330px;
    }
  }

  @media screen and (max-width: 395px) {
    width: 200px;
    & input {
      width: 200px;
    }
  }

`;
