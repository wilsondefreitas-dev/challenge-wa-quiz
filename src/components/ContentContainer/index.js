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

    border-radius: 2rem;
    border: 2px solid rgb(77, 129, 213);

    @media (max-height: 760px) {

        height: 100%;

    }

`;

const CustomButton = styled(Button)`
    width: 55%;
    margin-top: 1rem;
`;

const CustomInput = styled(Input)`
    width: 55%;
    margin-top: 1rem;
`;
const ContentContainer = () => {

    return (

        <RootContainer>

            <>

                <h1>Olá, seja bem-vindo ao Quiz Challenge da Wa!</h1>
                Aponte no campo abaixo o número total de questões que você deseja responder (max. 50).

                <CustomInput type="number" min="1" max='50' />

                <CustomButton color="primary" variant="contained">Confirmar</CustomButton>
                <CustomButton color="primary" variant="outlined">Ver resultados da sessão anterior</CustomButton>

            </>


        </RootContainer>

    );

};

export default ContentContainer;
