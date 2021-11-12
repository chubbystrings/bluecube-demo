import styled from "styled-components";

export const DropdownStyles = styled.div`
  position: absolute;
  top: 100%;
  right: 0px;
  width: 250px;
  z-index: 2;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 3px 10px 0px;
  border-radius: 5px;
  background-color: #fff;
  transform: ${(props: { visible: boolean }) =>
    props.visible ? "scale(1)" : "scale(0.0)"};
  transition: transform 300ms;

  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    border-top: 8px solid transparent;
    border-bottom: 8px solid #fff;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    left: 20%;
    top: -15px;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & ul li {
    padding: 20px 12px;
    color: rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: 1fr 3fr 0.5fr;
    align-items: center;

    & img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;
