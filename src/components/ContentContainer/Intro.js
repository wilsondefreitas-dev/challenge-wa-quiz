import React, { useState, useContext, createRef } from "react";
import { CustomButton, CustomInput, Title } from './styles';
import { TotalQuestionsContext, CurrentComponentContext } from "../../contexts";

const valueLimits = { max: 50, min: 1 };

const Intro = () => {

    const [initButtonEnabled, setInitButtonDesabled] = useState(true);
    const [showReviewLastResult, setShowReviewLastResult] = useState(false);

    const { setTotalQuestions } = useContext(TotalQuestionsContext);
    const { setCurrentComponent } = useContext(CurrentComponentContext);

    const inputElement = createRef();

    const handleInputOnChange = (e) => {

        e.preventDefault();

        const { value } = e.target;

        const isEmpty = !(value.length > 0);
        const moreThan2Chars = value.length > 2;
        const biggeThanMaxLimit = value > valueLimits.max;
        const smallerThanMinLimit = value < (valueLimits.min - 1);

        if (moreThan2Chars) e.target.value = value.slice(0, 2);

        if (biggeThanMaxLimit) {

            e.target.value = valueLimits.max;

        } else if (smallerThanMinLimit) {

            e.target.value = valueLimits.min;

        }

        setInitButtonDesabled(isEmpty);

    };

    const handleOnClickConfirm = () => {

        setTotalQuestions(inputElement.current.children[0].value);
        setCurrentComponent('Confirmation');

    }

    return (

        <>

            <Title>
                <h1>Olá, seja bem-vindo ao <span>Quiz Challenge da Wa</span>!</h1>
                Insira no campo abaixo o número total de questões que você deseja responder (máx. 50).
            </Title>

            <CustomInput ref={inputElement} type="number" onChange={handleInputOnChange} />

            <CustomButton onClick={handleOnClickConfirm} disabled={initButtonEnabled}>Confirmar</CustomButton>

            {
                showReviewLastResult &&
                <CustomButton>Ver resultado da última anterior</CustomButton>

            }

        </>

    )

}

export default Intro;