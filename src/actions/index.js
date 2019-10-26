export const NEXT_QUESTION = 'NEXT_QUESTION';
export const nextQuestion = item => {
    console.log("Made it to action!", item);
    return { type: NEXT_QUESTION, payload: item};
};