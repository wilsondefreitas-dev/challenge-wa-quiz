import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Axios from 'axios';
import { API_ENDPOINT } from './../constants';
import { Option, Title, QuestionCounter, Feedback, CustomButton } from './../styles';
import { renderAsHTML } from './../utils';

import {
    QuizDataContext,
    TotalQuestionsContext,
    CurrentComponentContext,
} from '../contexts';

const Quiz = () => {

    const [answer, dispatchAnswer] = useReducer((state, action) => {

        switch (action.type) {

            case 'CORRECT_ANSWER': return { isAnswered: true, isCorrect: true };
            case 'WRONG_ANSWER': return { isAnswered: true, isCorrect: false };
            case 'RESET': return { isAnswered: false, isCorrect: false };
            default: throw new Error();

        }

    }, { isAnswered: false, isCorrect: false });

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [reviewMode, setRevieMode] = useState(false);

    const { currentQuestions, setCurrentQuestions } = useContext(QuizDataContext);
    const { userAnswers, setUserAnswers } = useContext(QuizDataContext);
    const { userScore, setUserScore } = useContext(QuizDataContext);
    const { totalQuestions } = useContext(TotalQuestionsContext);

    const { setCurrentComponent } = useContext(CurrentComponentContext);

    const getAnswers = useCallback((question) => {

        const incorrectAnswersObjs = question.incorrect_answers.map((answer, index) => {

            return { answer: renderAsHTML(answer), correct: false, id: index }

        });

        const correctAnswersObj = { answer: renderAsHTML(question.correct_answer), correct: true, id: incorrectAnswersObjs.length };

        return [...incorrectAnswersObjs, correctAnswersObj].sort(() => .5 - Math.random());

    }, []);

    const getConfiguredPayload = useCallback((questions) => {

        return questions.map((question, index) => ({

            question: renderAsHTML(question.question), answers: getAnswers(question), id: index

        }));

    }, [getAnswers]);

    const fecthData = useCallback(async () => {

        Axios.get(`${API_ENDPOINT}${totalQuestions}`)
            .then(response => {

                const dataConfigured = getConfiguredPayload(response.data.results);
                setCurrentQuestions(dataConfigured);

            })

    }, [setCurrentQuestions, getConfiguredPayload, totalQuestions]);

    useEffect(() => {

        if (currentQuestions.length === 0) {

            fecthData();

        } else {

            setRevieMode(true);
            setCurrentQuestions(currentQuestions);

        }

        // eslint-disable-next-line 
    }, []);

    const handleOptionOnClick = (e) => {

        const { className, id } = e.target;

        checkIfIsCorrect(className);
        setUserAnswers([...userAnswers, parseInt(id)]);

        if (currentQuestion < currentQuestions.length) goNextQuestion(e.target);

    }

    const handleOnClickReviewNextQuestion = () => {

        goNextQuestion();

    };

    const checkIfIsCorrect = (elementClass) => {

        const answerIsCorrect = (!elementClass.includes("incorrect"));

        if (answerIsCorrect) {

            dispatchAnswer({ type: 'CORRECT_ANSWER' });
            setUserScore(userScore + 1);

        } else {

            dispatchAnswer({ type: 'WRONG_ANSWER' });

        }

    }

    const goNextQuestion = () => {

        setTimeout(() => {

            const isNotLastQuestion = (currentQuestion < currentQuestions.length - 1);

            if (isNotLastQuestion) {

                setCurrentQuestion(currentQuestion + 1);
                dispatchAnswer({ type: 'RESET' });

            } else {

                setCurrentComponent('Result');

            }

        }, reviewMode ? 0 : 1500);

    }

    return (

        currentQuestions.length <= 0 ?

            (<h3>Carregando questões...</h3>) :

            (<>

                <QuestionCounter>

                    Questão {currentQuestion + 1} de {totalQuestions} <b>/</b> Nº de acertos: {userScore}

                </QuestionCounter>

                <Title>

                    <h2>{renderAsHTML(currentQuestions[currentQuestion].question)}</h2>

                </Title>

                {

                    currentQuestions[currentQuestion].answers.map(value => {

                        return <Option
                            id={value.id}
                            key={value.answer}
                            className={value.correct ? 'correct' : 'incorrect'}
                            onClick={handleOptionOnClick}
                            selected={(value.id === userAnswers[currentQuestion])}
                            correct={(value.correct)}
                            showFeedback={(value.correct && reviewMode)}
                            disabled={answer.isAnswered || reviewMode}>

                            {

                                value.answer

                            }

                        </Option>

                    })

                }

                {

                    answer.isAnswered && <Feedback>

                        {answer.isCorrect ?
                            <h3 className="correct">{'Parabéns! você acertou a resposta!'}</h3> :
                            <h3 className="wrong">{'Que pena! você errou a resposta!'}</h3>}

                    </Feedback>

                }

                {

                    reviewMode &&
                    <CustomButton onClick={handleOnClickReviewNextQuestion}>
                        {currentQuestion + 1 === parseInt(totalQuestions) ? 'Ver resultado' : 'Ver próxima questão'}
                    </CustomButton>

                }

            </>)

    )

}

export default Quiz;