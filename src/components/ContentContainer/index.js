import React, { useState } from "react";
import Intro from './Intro';
import Confirmation from './Confirmation';
import Quiz from './Quiz';
import Result from './Result';
import { RootContainer } from './../styles';

import {
    TotalQuestionsContext,
    CurrentComponentContext,
    QuizDataContext
} from "./../contexts.js";

const ContentContainer = () => {

    const [totalQuestions, setTotalQuestions] = useState(0);
    const [currentComponent, setCurrentComponent] = useState('Intro');

    const [userScore, setUserScore] = useState(0);
    const [currentQuestions, setCurrentQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);

    const components = {

        Intro: <Intro />,
        Confirmation: <Confirmation />,
        Quiz: <Quiz />,
        Result: <Result />

    };

    return (

        <RootContainer>

            <CurrentComponentContext.Provider value={{ setCurrentComponent }}>
                <TotalQuestionsContext.Provider value={{ totalQuestions, setTotalQuestions }}>
                    <QuizDataContext.Provider value={{ userScore, setUserScore, currentQuestions, setCurrentQuestions, userAnswers, setUserAnswers }}>

                        {components[currentComponent]}

                    </QuizDataContext.Provider >
                </TotalQuestionsContext.Provider >
            </CurrentComponentContext.Provider >

        </RootContainer>

    );

};

export default ContentContainer;
