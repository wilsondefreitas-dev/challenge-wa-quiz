import React, { useContext, useEffect } from 'react';
import { CustomButton, CustomButtonSecundary, Title } from './../styles';
import { TotalQuestionsContext, CurrentComponentContext, QuizDataContext } from "./../contexts.js";

const Result = () => {

    const { currentQuestions, setCurrentQuestions } = useContext(QuizDataContext);
    const { userScore, setUserScore } = useContext(QuizDataContext);
    const { userAnswers, setUserAnswers } = useContext(QuizDataContext);
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

        window.localStorage.removeItem('lastSessionData');

        setUserScore(0);
        setUserAnswers([]);
        setTotalQuestions(0);
        setCurrentQuestions([]);

    }

    const loadData = () => {

        const localStorageObj = JSON.parse(window.localStorage.getItem('lastSessionData'));

        setUserScore(localStorageObj.userScore);
        setUserAnswers(localStorageObj.userAnswers);
        setTotalQuestions(localStorageObj.totalQuestions);
        setCurrentQuestions(localStorageObj.currentQuestions);

    }

    useEffect(() => {

        const localStorageObj = JSON.parse(window.localStorage.getItem('lastSessionData'));

        if (localStorageObj) {

            loadData();


        } else {

            window.localStorage.setItem('lastSessionData', JSON.stringify({ userScore, totalQuestions, userAnswers, currentQuestions }));

        }

        // eslint-disable-next-line
    }, [])

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