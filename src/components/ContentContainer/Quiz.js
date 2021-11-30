import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react';
import { Option, Title, QuestionCounter, Feedback } from './styles';
import { TotalQuestionsContext, CurrentComponentContext, QuizDataContext } from '../../contexts';

import Axios from 'axios';

const API_ENDPOINT = 'https://opentdb.com/api.php?amount=';
let userAnswers = [];
let sessionQuestions = [];

const questionsReducer = (state, action) => {

    switch (action.type) {

        case 'LOAD_COMPLETE':

            return { data: action.payload, loading: false, error: false };

        case 'LOAD_ERROR':

            return { data: [], loading: false, error: true };

        default:

            throw new Error();

    }

}

const answerReducer = (state, action) => {

    switch (action.type) {

        case 'CORRECT_ANSWER':

            return { isAnswered: true, isCorrect: true };

        case 'WRONG_ANSWER':

            return { isAnswered: true, isCorrect: false };

        case 'RESET':

            return { isAnswered: false, isCorrect: false };

        default:

            throw new Error();

    }

}

const Quiz = () => {

    const [questions, dispatchQuestions] = useReducer(questionsReducer, { data: [], loading: true, error: false });
    const [answers, dispatchAnswers] = useReducer(answerReducer, { isAnswered: false, isCorrect: false });

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userScore, setUserScore] = useState(0);

    const { setCurrentComponent } = useContext(CurrentComponentContext);
    const { totalQuestions } = useContext(TotalQuestionsContext);
    const { setQuizData } = useContext(QuizDataContext);

    //

    const getAnswers = useCallback((question) => {

        const incorrectAnswersObjs = question.incorrect_answers.map((answer, index) => {

            return {
                answer: renderAsHTML(answer),
                correct: false,
                id: index
            }

        });

        const correctAnswersObj = {
            answer: renderAsHTML(question.correct_answer),
            correct: true,
            id: incorrectAnswersObjs.length
        };

        return [...incorrectAnswersObjs, correctAnswersObj].sort(() => .5 - Math.random());

    }, []);

    const getConfiguredPayload = useCallback((questions) => {

        return questions.map((question, index) => {

            const answers = getAnswers(question);

            return {
                question: renderAsHTML(question.question),
                answers: answers,
                id: index
            }

        });

    }, [getAnswers]);

    const fecthData = useCallback(async () => {

        Axios.get(`${API_ENDPOINT}${totalQuestions}`)
            .then(response => {

                const dataConfigured = getConfiguredPayload(response.data.results);

                dispatchQuestions({ type: 'LOAD_COMPLETE', payload: dataConfigured });
                sessionQuestions = dataConfigured;

            })
            .catch(error => {

                dispatchQuestions({ type: 'LOAD_ERROR' });

            });

    }, [getConfiguredPayload, totalQuestions]);

    //

    useEffect(() => {

        fecthData();

    }, [fecthData]);

    useEffect(() => {

        setQuizData({ score: userScore, questions: sessionQuestions, answers: userAnswers });

    }, [userScore, setQuizData]);

    //

    const handleOptionOnClick = (e) => {

        const { className, id } = e.target;

        checkIfIsCorrect(className);

        userAnswers.push(id);

        if (currentQuestion < questions.data.length) goNextQuestion(e.target);

    }

    const checkIfIsCorrect = (elementClass) => {

        const answerIsCorrect = (!elementClass.includes("incorrect"));

        if (answerIsCorrect) {

            dispatchAnswers({ type: 'CORRECT_ANSWER' });
            setUserScore(userScore + 1);

        } else {

            dispatchAnswers({ type: 'WRONG_ANSWER' });

        }

    }

    const goNextQuestion = () => {

        setTimeout(() => {

            const isNotLastQuestion = (currentQuestion < questions.data.length - 1);

            if (isNotLastQuestion) {

                setCurrentQuestion(currentQuestion + 1);
                dispatchAnswers({ type: 'RESET' });

            } else {

                setCurrentComponent('Result');

            }

        }, 500);

    }

    const renderAsHTML = (str) => {

        const element = document.createElement("textarea");
        element.innerHTML = str;
        return element.value

    }

    return (

        questions.data.length <= 0 ?

            ((questions.error) ? <h3>Ocorreu algum erro, tente novamente.</h3> : <h3>Carregando questões...</h3>) :

            (<>

                <QuestionCounter>

                    Questão {currentQuestion + 1} de {totalQuestions} <b>/</b> Nº de acertos: {userScore}

                </QuestionCounter>

                <Title>

                    <h2>{renderAsHTML(questions.data[currentQuestion].question)}</h2>

                </Title>

                {

                    questions.data[currentQuestion].answers.map(value =>

                        <Option
                            id={value.id}
                            className={value.correct ? 'correct' : 'incorrect'}
                            key={value.answer}
                            onClick={handleOptionOnClick}
                            disabled={answers.isAnswered}>

                            {value.answer}

                        </Option>

                    )

                }

                {

                    answers.isAnswered && <Feedback>

                        {answers.isCorrect ?
                            <h3 className="correct">{'Parabéns! você acertou a resposta!'}</h3> :
                            <h3 className="wrong">{'Que pena! você errou a resposta!'}</h3>}

                    </Feedback>

                }

            </>)

    )

}

export default Quiz;