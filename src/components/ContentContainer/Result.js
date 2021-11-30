import React, { useContext } from 'react';
import { CustomButton, CustomButtonSecundary, Title } from './styles';
import { TotalQuestionsContext, CurrentComponentContext, QuizDataContext } from '../../contexts';

const Result = () => {

    const { totalQuestions } = useContext(TotalQuestionsContext);
    const { setCurrentComponent } = useContext(CurrentComponentContext);
    const { quizData } = useContext(QuizDataContext);

    console.log(quizData);

    return (

        <>
            <Title>
                <h1>Resultado:</h1>
                <h2>Acertos: <span>{quizData.score}</span> | Erros: {totalQuestions - quizData.score}</h2>
            </Title>

            <CustomButton >Rever Respostas</CustomButton>
            <CustomButtonSecundary>Jogar novamente</CustomButtonSecundary>

        </>

    )

}

export default Result;