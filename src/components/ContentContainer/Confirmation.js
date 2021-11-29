import React, { useState } from "react";
import { CustomButton, CustomButtonSecundary, Title } from './styles';

const Confirmation = () => {

    const [QuestionsNum, setQuestionsNum] = useState(10);

    const getLabel = () => `${QuestionsNum} ${(QuestionsNum === 1) ? 'questão' : 'questões'}`;

    return (

        <>

            <Title><h1>Você tem certeza que deseja <br />iniciar com <span>{getLabel()}</span>?</h1></Title>

            <CustomButton>Confirmar</CustomButton>
            <CustomButtonSecundary variant="text">Cancelar</CustomButtonSecundary>

        </>

    )

}

export default Confirmation;