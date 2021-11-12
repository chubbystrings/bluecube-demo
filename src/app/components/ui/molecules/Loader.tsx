import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png'


export default function DevListLoader() {
    return (
        <Loader>
            <img src={logo} alt="bluecube logo"/>
        </Loader>
    )
}

const Loader = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    right: 0;
    animation: anime 1s infinite;
    width: 50px;
    height: 50px;

    @keyframes anime {
    from {
      transform: rotate(-180deg);
    }

    to {
      transform: rotate(180deg);
    }
  }

`
