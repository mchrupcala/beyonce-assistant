export const NEXT_QUESTION = 'NEXT_QUESTION';
export const nextQuestion = item => {
    return { type: NEXT_QUESTION, payload: item};
};

export const LAST_QUESTION = 'LAST_QUESTION';
export const lastQuestion = item => {
    return { type: LAST_QUESTION, payload: item};
};

export const RESTART = 'RESTART';
export const restart = item => {
    return { type: RESTART, payload: item};
};