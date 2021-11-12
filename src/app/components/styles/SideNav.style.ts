import styled from "styled-components";

export const SideNavStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--background);
  gap: 5px;
  box-sizing: border-box;
  align-items: center;
  padding-top: 95px;
  position: relative;

  transition: 500ms;
  & h4 {
    margin-left: -80px;
    padding: 5px 0px;
  }

  & > div:nth-child(3) {
    margin-top: 25px;
  }

  & .row {
    display: flex;
    flex-direction: column;
    gap: 5px;

    & .col {
      display: grid;
      grid-template-columns: 0.5fr 5fr;
      align-items: center;
      grid-gap: 20px;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      padding: 0px 10px;
      cursor: pointer;

      & button {
        padding: 15px 2px;
        text-align: left;
        border: none;
        background-color: transparent;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
      }
    }

    & .active {
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

  & .logo {
    position: absolute;
    top: 25px;
    left: auto;
    width: 200px;
    @media screen and (max-width: 1080px) {
      display: none;
    }
  }

  @media screen and (max-width: 1080px) {
    position: fixed;
    width: 250px;
    height: 100vh;
    left: ${(props: { toggle: boolean }) => (props.toggle ? "10px" : "-250px")};
    z-index: 10000;

    & > div:nth-child(3) {
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 320px) {
    width: 180px;
  }
`;
