import React, { useContext } from 'react';
import { CustomButton, CustomButtonSecundary, Title } from './styles';
import { TotalQuestionsContext, CurrentComponentContext, QuizDataContext } from '../../contexts';

const Result = () => {

    const { totalQuestions } = useContext(TotalQuestionsContext);
    const { setCurrentComponent } = useContext(CurrentComponentContext);
    const { quizData } = useContext(QuizDataContext);

    console.log(quizData);

    const handleOnClickReview = () => {

        setCurrentComponent('Quiz');

    }

    const handleOnClickPlayAgain = () => {

        setCurrentComponent('Intro');

    }

    return (

        <>
            <Title>
                <h1>Resultado:</h1>
                <h2>Acertos: <span>{quizData.score}</span> | Erros: {totalQuestions - quizData.score}</h2>
            </Title>

            <CustomButton onClick={handleOnClickReview}>Rever Respostas</CustomButton>
            <CustomButtonSecundary onClick={handleOnClickPlayAgain}>Jogar novamente</CustomButtonSecundary>

        </>

    )

}

export default Result;