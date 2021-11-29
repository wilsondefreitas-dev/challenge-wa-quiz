import React, { useState } from "react";
import { CustomButton, CustomInput, Title } from './styles';

const Intro = () => {

    const [initButtonEnabled, setInitButtonEnabled] = useState(true);
    const [showReviewLastResult, setShowReviewLastResult] = useState(false);

    const valueLimits = { max: 50, min: 1 };

    const handleInputOnChange = (e) => {

        e.preventDefault();

        const { value } = e.target;

        const haveData = value.length > 0;
        const haveMoreThan2Chars = value.length > 2;
        const valueIsBiggerThanMaxLimit = value > valueLimits.max;
        const valueIsSmallerThanMinLimit = value < (valueLimits.min - 1);

        if (haveMoreThan2Chars) e.target.value = value.slice(0, 2);

        if (valueIsBiggerThanMaxLimit) {

            e.target.value = valueLimits.max;

        } else if (valueIsSmallerThanMinLimit) {

            e.target.value = valueLimits.min;

        }

        setInitButtonEnabled(!haveData);

    };

    return (

        <>
            <Title>
                <h1>Olá, seja bem-vindo ao <span>Quiz Challenge da Wa</span>!</h1>
                Insira no campo abaixo o número total de questões que você deseja responder (máx. 50).
            </Title>

            <CustomInput type="number" onChange={handleInputOnChange} />

            <CustomButton disabled={initButtonEnabled}>Confirmar</CustomButton>

            {
                showReviewLastResult &&
                <CustomButton>Ver resultado da última anterior</CustomButton>

            }

        </>

    )

}

export default Intro;