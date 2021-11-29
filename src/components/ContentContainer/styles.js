import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

export const Title = styled.div`

    text-align: center;

    h1, h2{

        color: black;
        margin-top: 0;

    }

    span{

        color: rgb(0, 71, 186);

    }

`;

export const CustomButton = styled(Button)`

    width: 55%;
    margin: 1rem 0;

    background-color: rgb(77, 129, 213);
    color: white;

    :hover{
        background-color: rgb(0, 71, 186);
    }

`;

export const CustomButtonSecundary = styled(Button)`

    width: 55%;

`;

export const CustomInput = styled(Input)`

    width: 150px;
    margin-top: 1rem;

    font-size: 2rem;

    input{

        text-align: center;

    }

`;

export const Option = styled.button`

    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    text-align: center;
    border-radius: 1rem;
    border: 2px solid #dedede;
    cursor: pointer;
    
    :hover{

        border-color: rgb(77, 129, 213);
        background-color: white;

    }

    :disabled {
        
        pointer-events: none;

    }

`;

export const QuestionCounter = styled.div`
    
    border-bottom: 1px solid #dedede;
    margin-bottom: 0.5rem;

    b{

        color: rgb(0, 71, 186);

    }

`;
