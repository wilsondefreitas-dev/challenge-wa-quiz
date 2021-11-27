import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

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

const CustomButton = styled(Button)`
    width: 55%;
    margin-top: 1rem;
    background-color: rgb(77, 129, 213);
    color: white;

    :hover{
        background-color: rgb(0, 71, 186);
    }
`;

const CustomInput = styled(Input)`
    width: 55%;
    margin-top: 1rem;
`;

const Title = styled.div`

    text-align: center;

`;

const ContentContainer = () => {

    return (

        <RootContainer>

            <>
                <Title>
                    <h1>Olá, seja bem-vindo ao <span style={{ color: 'rgb(0, 71, 186)' }}>Quiz Challenge da Wa</span>!</h1>
                    Aponte no campo abaixo o número total de questões que você deseja responder (max. 50).
                </Title>

                <CustomInput type="number" min="1" max='50' />

                <CustomButton>Confirmar</CustomButton>
                <CustomButton>Ver resultado da última anterior</CustomButton>

            </>


        </RootContainer>

    );

};

export default ContentContainer;
