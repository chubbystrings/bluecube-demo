import styled from "styled-components";

export const AvatarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: absolute;
  display: none;
  top: 15px;
  left: 25px;

  @media screen and (max-width: 320px) {
    left: 2px;
  }

  & .notification-wrapper {
      position: absolute;
      right: 1px;
      top: -5px;
  }

  & .avatar {
    gap: 20px;
    align-items: center;
    display: none;
    @media screen and (max-width: 1080px) {
      display: flex;
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
    display: flex;

    & img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }

    & .notify {
      position: absolute;
      bottom: 15px;
      left: 50px;
      background-color: green;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 1080px) {
      display: grid;
    }
`;
