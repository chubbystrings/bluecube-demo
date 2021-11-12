import styled from "styled-components";

interface PROPS {
    hover: boolean;
    image: string
}

export const CardStyles = styled.div`
  box-shadow:  ${(props: PROPS) => props.hover ? 'rgba(100, 100, 111, 0.2) 0px 17px 15px 0px;': 'rgba(100, 100, 111, 0.2) 0px 3px 10px 0px;'};
  width: 200px;
  height: 280px;
  border-radius: 10px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
 

  & .profile-info {
      position: absolute;
      bottom: 0px;
      padding: 0px 20px;
      color: ${(props: PROPS) => props.hover ? '#000': '#fff'};
      background-color: ${(props: PROPS) => props.hover ? '#fff': 'transparent'};
      height: 35%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 162px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;

  }

  & .action {
      display: grid;
      grid-gap: 5px;
      grid-template-columns: 1fr 1fr;
      display: ${(props: PROPS) => props.hover ? 'block' : 'none'};


      & button {
          padding: 3px;
          width: 70px;
          border: none;
          outline: none;
          border-radius: 5px;
          margin: 2px;
          cursor: pointer;
      }

      & > button:nth-child(1) {
          background-color: var(--danger)
      }

      & > button:nth-child(2) {
        background-color: var(--secondary)
      } 
  }
`;
