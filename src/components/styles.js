import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

export const RootContainer = styled.div`

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
    margin-top: 1rem;

    background-color: rgb(77, 129, 213);
    color: white;

    :hover{
        background-color: rgb(0, 71, 186);
    }

`;

export const CustomButtonSecundary = styled(Button)`

    width: 55%;
    margin-top: 1rem;

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

    color: ${({ selected, showFeedback, correct }) => (showFeedback && !selected) ? 'forestgreen' : (selected) && 'white'};
    font-weight: ${({ selected, showFeedback }) => (selected || showFeedback) ? 'bold' : 'normal'};
    background-color: ${({ correct, selected }) => selected && (correct ? 'forestgreen' : 'orangered')};
    border-color: ${({ selected, showFeedback, correct }) => (showFeedback && !selected) && 'forestgreen'};
    
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

export const Feedback = styled.div`

    .correct{

        color: forestgreen;

    }

    .wrong{

        color: red;

    }

`;
