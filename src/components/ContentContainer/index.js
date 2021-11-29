import React from "react";
import styled from "styled-components";
import Intro from './Intro';
import Confirmation from './Confirmation';

const RootContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 600px;
    
    padding: 3rem;
    border-radius: 2rem;
    border: 2px solid rgb(77, 129, 213);

    @media (max-height: 760px) {

        height: 100%;

    }

`;

const ContentContainer = () => {

    return (

        <RootContainer>

            {/* <Intro /> */}
            <Confirmation />


        </RootContainer>

    );

};

export default ContentContainer;
