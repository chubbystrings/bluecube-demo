import styled from "styled-components";

export const ContentStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 23px;
    & h2 {
        text-align: center;
        margin: 0 auto;
    }

    @media screen and (max-width: 875px) {
        justify-content: center;
    }
    
`