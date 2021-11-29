import React, { useState } from "react";
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";


const CustomButton = styled(Button)`

    width: 55%;
    margin-top: 1rem;

    background-color: rgb(77, 129, 213);
    color: white;

    :hover{
        background-color: rgb(0, 71, 186);
    }
`;

const CustomInput = styled(Input)`

    width: 150px;
    margin-top: 1rem;
    
    font-size: 2rem;
    
    input{

        text-align: center;

    }
`;

const Title = styled.div`

    text-align: center;

    h1{

        color: black;
        margin-top: 0;

    }

    span{

        color: rgb(0, 71, 186);

    }

`;

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