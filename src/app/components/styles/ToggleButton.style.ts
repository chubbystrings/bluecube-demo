import styled from "styled-components";

export const ToggleWrapper = styled.div`
  position: fixed;
  right: 2px;
    top: 1px;
  display: none;
  z-index: 500 ;
  @media screen and (max-width: 1080px) {
    display: block;
  }

  @media screen and (max-width: 875px) {
    right: 2px;
    top: 1px;
  }
`;
export const ToggleButtonStyle = styled.button`
  background-color: var(--secondary);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    background-color: #fff;
    height: 2px;
    width: 10px;
    position: absolute;
    transition: all 0.5s ease;
    top: ${(props: { clicked: boolean }) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    content: "";
    background-color: #fff;
    height: 2px;
    width: 10px;
    position: absolute;
    transition: all 0.5s ease;
    top: ${(props: { clicked: boolean }) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

`;
