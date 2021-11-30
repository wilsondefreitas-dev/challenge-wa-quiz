import { createContext } from "react";

export const TotalQuestionsContext = createContext({

    totalQuestions: 0,
    setTotalQuestions: (value) => { }

});

export const CurrentComponentContext = createContext({

    currentComponent: 'Intro',
    setCurrentComponent: (value) => { }

})