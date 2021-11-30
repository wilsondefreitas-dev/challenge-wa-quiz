import React, { useState } from "react";
import styled from "styled-components";
import Intro from './Intro';
import Confirmation from './Confirmation';
import Quiz from './Quiz';
import Result from './Result';

import { TotalQuestionsContext, CurrentComponentContext, QuizDataContext } from "../../contexts";

const RootContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 600px;
    
    padding: 3rem;
    border-radius: 2rem;
    border: 2px solid rgb(77, 129, 213);

    @media (max-height: 760px) {

        height: 100%;

    }

`;

const ContentContainer = () => {

    const [totalQuestions, setTotalQuestions] = useState(0);
    const [currentComponent, setCurrentComponent] = useState('Intro');
    const [quizData, setQuizData] = useState({ score: 0, questions: [], answers: [] });

    const components = {

        Intro: <Intro />,
        Confirmation: <Confirmation />,
        Quiz: <Quiz />,
        Result: <Result />

    };

    return (

        <RootContainer>

            <TotalQuestionsContext.Provider value={{ totalQuestions, setTotalQuestions }}>
                <CurrentComponentContext.Provider value={{ setCurrentComponent }}>
                    <QuizDataContext.Provider value={{ quizData, setQuizData }}>

                        {components[currentComponent]}

                    </QuizDataContext.Provider >
                </CurrentComponentContext.Provider >
            </TotalQuestionsContext.Provider >

        </RootContainer>

    );

};

export default ContentContainer;
