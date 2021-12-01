import React, { useContext } from 'react';
import { CustomButton, CustomButtonSecundary, Title } from './../styles';
import { TotalQuestionsContext, CurrentComponentContext, QuizDataContext } from "./../contexts.js";

const Result = () => {

    const { setCurrentQuestions } = useContext(QuizDataContext);
    const { userScore, setUserScore } = useContext(QuizDataContext);
    const { setUserAnswers } = useContext(QuizDataContext);
    const { totalQuestions, setTotalQuestions } = useContext(TotalQuestionsContext);

    const { setCurrentComponent } = useContext(CurrentComponentContext);

    const handleOnClickReview = () => {

        setCurrentComponent('Quiz');

    }

    const handleOnClickPlayAgain = () => {

        resetData();

        setCurrentComponent('Intro');

    }

    const resetData = () => {

        setUserScore(0);
        setUserAnswers([]);
        setTotalQuestions(0);
        setCurrentQuestions([]);

    }

    return (

        <>
            <Title>
                <h1>Resultado:</h1>
                <h2>Acertos: <span>{userScore}</span> | Erros: {totalQuestions - userScore}</h2>
            </Title>

            <CustomButton onClick={handleOnClickReview}>Rever Respostas</CustomButton>
            <CustomButtonSecundary onClick={handleOnClickPlayAgain}>Jogar novamente</CustomButtonSecundary>

        </>

    )

}

export default Result;