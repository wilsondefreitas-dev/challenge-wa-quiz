import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Option, Title, QuestionCounter, Feedback } from './styles';
import { TotalQuestionsContext, CurrentComponentContext } from '../../contexts';

import Axios from 'axios';

const API_ENDPOINT = 'https://opentdb.com/api.php?amount=';
let userAnswers = [];
let sessionQuestions = [];

const questionsReducer = (state, action) => {

    switch (action.type) {

        case 'LOAD_COMPLETE':

            sessionQuestions = action.payload;
            return { data: action.payload, loading: false, error: false };

        case 'LOAD_ERROR':

            return { data: [], loading: false, error: true };

        default:

            throw new Error();

    }

}

const Quiz = () => {

    const [questions, dispatchQuestions] = useReducer(questionsReducer, { data: [], loading: true, error: false });

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [userScore, setUserScore] = useState(0);

    const { setCurrentComponent } = useContext(CurrentComponentContext);
    const { totalQuestions } = useContext(TotalQuestionsContext);

    useEffect(() => {

        Axios.get(`${API_ENDPOINT}${totalQuestions}`)
            .then(response => {

                dispatchQuestions({ type: 'LOAD_COMPLETE', payload: response.data.results });

            })
            .catch(error => {

                dispatchQuestions({ type: 'LOAD_ERROR' });

            });

    }, [totalQuestions])

    const handleOptionOnClick = (e) => {

        const { className, id } = e.target;

        setIsAnswered(true);
        checkIfIsCorrect(className);

        userAnswers.push(id);

        if (currentQuestion < questions.data.length) goNextQuestion(e.target);

    }

    const checkIfIsCorrect = (elementClass) => {

        const answerIsCorrect = (!elementClass.includes("incorrect"));

        if (answerIsCorrect) {

            setIsCorrect(true);
            setUserScore(userScore + 1);

        } else {

            setIsCorrect(false);

        }

    }

    const goNextQuestion = () => {

        setTimeout(() => {

            const isNotLastQuestion = (currentQuestion < questions.data.length - 1);

            if (isNotLastQuestion) {

                setCurrentQuestion(currentQuestion + 1);
                setIsAnswered(false);

            } else {

                setCurrentComponent('Result');

            }

        }, 1500);

    }

    const getAnswers = () => {

        const question = questions.data[currentQuestion];

        const incorrect_answers = question.incorrect_answers;
        const correct_answer = question.correct_answer;

        const incorrectAnswersObjs = incorrect_answers.map((answer, index) => {

            return { answer: renderAsHTML(answer), correct: false, id: index }

        });

        const correctAnswersObj = { answer: renderAsHTML(correct_answer), correct: true, id: incorrectAnswersObjs.length };

        return [...incorrectAnswersObjs, correctAnswersObj].sort(() => .5 - Math.random());

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

                    getAnswers().map(value =>

                        <Option
                            id={value.id}
                            className={value.correct ? 'correct' : 'incorrect'}
                            key={value.answer}
                            onClick={handleOptionOnClick}
                            disabled={isAnswered}>

                            {value.answer}

                        </Option>

                    )

                }

                {

                    isAnswered && <Feedback>

                        {isCorrect ?
                            <h3 className="correct">{'Parabéns! você acertou a resposta!'}</h3> :
                            <h3 className="wrong">{'Que pena! você errou a resposta!'}</h3>}

                    </Feedback>

                }

            </>)

    )

}

export default Quiz;