import React from 'react';
import { CustomButton, CustomButtonSecundary, Title } from './styles';
import { TotalQuestionsContext } from '../../contexts';

const Result = () => {

    const correctsNum = 8;
    const totalQuestions = 10;

    return (

        <>
            <Title>
                <h1>Resultado:</h1>
                <h2>Acertos: <span>{correctsNum}</span> | Erros: {totalQuestions - correctsNum}</h2>
            </Title>

            <CustomButton >Rever Respostas</CustomButton>
            <CustomButtonSecundary>Jogar novamente</CustomButtonSecundary>

        </>

    )

}

export default Result;