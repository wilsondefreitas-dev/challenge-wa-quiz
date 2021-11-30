import { createContext } from "react";

export const TotalQuestionsContext = createContext({

    totalQuestions: 0,
    setTotalQuestions: (value) => { }

});

export const CurrentComponentContext = createContext({

    currentComponent: 'Intro',
    setCurrentComponent: (value) => { }

})

export const QuizDataContext = createContext({

    quizData: { score: 0, questions: [], answers: [] },
    setQuizData: (value) => { }

});