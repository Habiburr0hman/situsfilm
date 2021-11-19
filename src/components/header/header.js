import React from "react";
import styled from "styled-components";

import logo from "./logo.png";

const Main = styled.div`
    align-items: center;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    /* & * {
        margin-bottom: 20px;
    } */
`;

const Title = styled.h1`
`;

const Logo = styled.img`
    max-width: 100px;
`;

function Header(){
    return(
        <Main>
            <Title>Movie</Title>
            <Logo src={logo}/>
        </Main>
    );
};

export default Header;
