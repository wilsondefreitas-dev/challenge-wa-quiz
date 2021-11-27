import React from "react";
import styled from "styled-components";

const RootContainer = styled.div`

    width: 100%;
    min-height: 600px;

    border-radius: 2rem;
    border: 2px solid rgb(77, 129, 213);

    @media (max-height: 760px) {

        height: 100%;

    }

`;

const ContentContainer = () => {

    return (

        <RootContainer>


        </RootContainer>

    );

};

export default ContentContainer;
