import React, { useState, useContext, createRef, useEffect } from "react";
import { CustomButton, CustomInput, Title } from './../styles';
import { totalQuestionLimits } from "./../constants";

import {
    TotalQuestionsContext,
    CurrentComponentContext
} from "./../contexts.js";

const Intro = () => {

    const { setTotalQuestions } = useContext(TotalQuestionsContext);
    const { setCurrentComponent } = useContext(CurrentComponentContext);

    const [showReviewLastResult, setShowReviewLastResult] = useState(false);
    const [initButtonDisabled, setInitButtonDisabled] = useState(true);

    const inputElement = createRef();

    const handleInputOnChange = (e) => {

        e.preventDefault();

        const { value } = e.target;

        const isEmpty = !(value.length > 0);
        const moreThan2Chars = (value.length > 2);
        const biggeThanMaxLimit = (value > totalQuestionLimits.max);
        const smallerThanMinLimit = (value < (totalQuestionLimits.min - 1));

        if (moreThan2Chars) e.target.value = value.slice(0, 2);

        if (biggeThanMaxLimit) {

            e.target.value = totalQuestionLimits.max;

        } else if (smallerThanMinLimit) {

            e.target.value = totalQuestionLimits.min;

        }

        setInitButtonDisabled(isEmpty);

    };

    const handleOnClickConfirm = () => {

        setTotalQuestions(inputElement.current.children[0].value);
        setCurrentComponent('Confirmation');

    };

    const handleOnClickReview = () => {

        setCurrentComponent('Result');

    };

    const handleKeyPress = (event) => {

        if (event.key === 'Enter') {

            if (!initButtonDisabled) handleOnClickConfirm();

        }

    };

    useEffect(() => {

        inputElement.current.children[0].focus();
        if (window.localStorage.getItem('lastSessionData')) setShowReviewLastResult(true);

        // eslint-disable-next-line 
    }, []);

    return (

        <>

            <Title>

                <h1>Olá, seja bem-vindo ao <span>Quiz Challenge da Wa</span>!</h1>
                Insira no campo abaixo o número total de questões que você deseja responder (máx. 50).

            </Title>

            <CustomInput ref={inputElement} type="number" onChange={handleInputOnChange} onKeyPress={handleKeyPress} />

            <CustomButton onClick={handleOnClickConfirm} disabled={initButtonDisabled}>Confirmar</CustomButton>

            {
                showReviewLastResult && <CustomButton onClick={handleOnClickReview}>Ver resultado da última sessão</CustomButton>

            }

        </>

    );

}

export default Intro;