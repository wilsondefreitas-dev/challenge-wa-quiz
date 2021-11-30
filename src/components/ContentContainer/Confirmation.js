import React, { useContext } from "react";
import { CustomButton, CustomButtonSecundary, Title } from './styles';
import { TotalQuestionsContext } from "../../contexts"

const Confirmation = () => {

    const { totalQuestions } = useContext(TotalQuestionsContext);

    const getLabel = () => {

        return `${totalQuestions} ${(totalQuestions === 1) ? 'questão' : 'questões'}`;

    }

    return (

        <>

            <Title><h1>Você tem certeza que deseja <br />iniciar com <span>{getLabel()}</span>?</h1></Title>

            <CustomButton>Confirmar</CustomButton>
            <CustomButtonSecundary variant="text">Cancelar</CustomButtonSecundary>

        </>

    )

}


export default Confirmation;