import React from "react";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: row;
`;

const Title = styled.p`

`;

const DeleteButton = styled.button`

`;

function Wishlisted(props){
    return(
        <Main>
            <Title>{props.title}</Title>
            <DeleteButton onClick={() => {props.removeFromWishlist(props.title)}}>Remove</DeleteButton>
        </Main>
    )
};

export default Wishlisted;