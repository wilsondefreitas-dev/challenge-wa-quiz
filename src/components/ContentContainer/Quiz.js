import React, { useState } from 'react';
import { Option, Title, QuestionCounter } from './styles';

const Quiz = () => {

    const totalQuestion = 10;

    const [currentQuestion, setCurrentQuestion] = useState(1);

    const [correctAnswer, setCorrectAnswer] = useState(1);
    const [question, setQuestion] = useState('Pergunta assim assado e etc e talz?');
    const [answers, setAnswers] = useState(['Resposta 1', 'Resposta 2', 'Resposta 3', 'Resposta 4']);

    const [userScore, setUserScore] = useState(10);

    const [disabledOptions, setDisabledOptions] = useState(false);

    const handleOptionOnClick = (e) => {

        const { id } = e.target;
        const userAnswerCorrectly = (parseInt(id) === correctAnswer);

        e.target.style.backgroundColor = userAnswerCorrectly ? 'forestgreen' : 'indianred';
        e.target.style.color = 'white';

        setDisabledOptions(true);

    }

    return (

        <>

            <QuestionCounter>Questão {currentQuestion} de {totalQuestion} <b>/</b> Nº de acertos: {userScore}</QuestionCounter>
            <Title><h2>{question}</h2></Title>

            {

                answers.map((answer, index) => (

                    <Option id={index} onClick={handleOptionOnClick} disabled={disabledOptions}>{answer}</Option>


                ))

            }
        </>

    )

}

export default Quiz;