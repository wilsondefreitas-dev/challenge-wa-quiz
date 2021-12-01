import React, { useState, useContext, createRef } from "react";
import { CustomButton, CustomInput, Title } from './../styles';
import { totalQuestionLimits } from "./../constants";

import {
    TotalQuestionsContext,
    CurrentComponentContext
} from "./../contexts.js";

const Intro = () => {

    const { setTotalQuestions } = useContext(TotalQuestionsContext);
    const { setCurrentComponent } = useContext(CurrentComponentContext);

    const [showReviewLastResult] = useState(false);
    const [initButtonEnabled, setInitButtonDesabled] = useState(true);

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

        setInitButtonDesabled(isEmpty);

    };

    const handleOnClickConfirm = () => {

        setTotalQuestions(inputElement.current.children[0].value);
        setCurrentComponent('Confirmation');

    };

    return (

        <>

            <Title>

                <h1>Olá, seja bem-vindo ao <span>Quiz Challenge da Wa</span>!</h1>
                Insira no campo abaixo o número total de questões que você deseja responder (máx. 50).

            </Title>

            <CustomInput ref={inputElement} type="number" onChange={handleInputOnChange} />

            <CustomButton onClick={handleOnClickConfirm} disabled={initButtonEnabled}>Confirmar</CustomButton>

            {showReviewLastResult && <CustomButton>Ver resultado da última sessão</CustomButton>}

        </>

    );

}

export default Intro;