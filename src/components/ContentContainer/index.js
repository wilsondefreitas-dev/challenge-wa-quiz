import React, { useState } from "react";
import styled from "styled-components";
import Intro from './Intro';
import Confirmation from './Confirmation';
import Quiz from './Quiz';
import Result from './Result';

import { TotalQuestionsContext, CurrentComponentContext } from "../../contexts";

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

                    {components[currentComponent]}

                </CurrentComponentContext.Provider >
            </TotalQuestionsContext.Provider >

        </RootContainer>

    );

};

export default ContentContainer;
