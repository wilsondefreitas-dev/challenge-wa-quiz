import React, { useContext } from "react";
import { CustomButton, CustomButtonSecundary, Title } from '../styles';
import { TotalQuestionsContext, CurrentComponentContext } from "./../contexts.js";

const Confirmation = () => {

    const { totalQuestions } = useContext(TotalQuestionsContext);
    const { setCurrentComponent } = useContext(CurrentComponentContext);

    const getLabel = () => {

        return `${totalQuestions} ${(totalQuestions === 1) ? 'questão' : 'questões'}`;

    }

    const handleOnClickConfirm = () => {

        setCurrentComponent('Quiz');

    }

    const handleOnClickCancel = () => {

        setCurrentComponent('Intro');

    }

    return (

        <>

            <Title>

                <h1>Você tem certeza que deseja <br />iniciar com <span>{getLabel()}</span>?</h1>

            </Title>

            <CustomButton onClick={handleOnClickConfirm}>Confirmar</CustomButton>
            <CustomButtonSecundary onClick={handleOnClickCancel} variant="text">Cancelar</CustomButtonSecundary>

        </>

    )

}


export default Confirmation;