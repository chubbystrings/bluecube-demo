import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  gap: 40px;
  position: relative;

  & .avatar {
    display: flex;
    gap: 20px;
    align-items: center;
    @media screen and (max-width: 1080px) {
      display: none;
    }

    & .name-wrapper {
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }
  & .icons {
    position: relative;
    & .badge {
      position: absolute;
      background: var(--danger);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      bottom: 5px;
      right: 5px;
      font-size: 7px;
      text-align: center;
      display: grid;
      place-items: center;
      color: white;
    }
  }
  & .avatar-wrapper {
    border-radius: 50%;
    position: relative;

    & img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }

    & .notify {
      position: absolute;
      bottom: 15px;
      right: 15px;
      background-color: green;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 875px) {
    grid-template-columns: 1fr;
    margin-top: 20px;
  }
`;
