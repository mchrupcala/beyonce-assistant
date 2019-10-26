import React, {useState} from 'react';
import {NEXT_QUESTION} from '../actions';

export const initialState = {
    currentScript: "",
    currentIndex: 1,
 1: {
     script: "It's your first day on the job and Beyonce is getting ready for a red carpet. What are you getting her for breakfast? Yogurt, granola and strawberries or a 5 star breakfast.",
     outcome: null,
     choices: {
        ch1: ["Click here if you chose the yogurt, granola and strawberries", 2],
        ch2: ["Click here if you chose the 5 star breakfast", 1]
     },
     pass: null
 }, 
 2: {
    script: "She yells at you 'Are you trying to make me fat like you?!' then has her team of lawyers send you a termination letter.",
    outcome: null,
    choices: {
        ch1: ["", 1],
        ch2: ["", 2]
     },
    pass: null
}, 
3: {
    script: "She nods at you for choosing the healthy breakfast, then asks you to FaceTime her daughter. Who are you FaceTiming, Blue or Rumi?",
    outcome: null,
    choices: {
        ch1: ["Click here if you're FacTiming Rumi.", 1],
        ch2: ["Click here if you're FacTiming Blue Ivy.", 2]
     },
    pass: null
},
4: {
    script: "She says 'She's only 2...' then has her team of lawyers send you a termination letter.",
    outcome: null,
    choices: {
        ch1: ["", 1],
        ch2: ["", 2]
     },
    pass: null
},
5: {
    script: "",
    outcome: null,
    choices: {
        ch1: ["", 1],
        ch2: ["", 2]
     },
    pass: null
},
6: {
    script: "",
    outcome: null,
    choices: {
        ch1: ["", 1],
        ch2: ["", 2]
     },
    pass: null
}
};

export const reducer = (state = initialState, action) => {
        switch (action.type) {
            case NEXT_QUESTION: 
            console.log("Made it to reducer!");
                return {
                    ...state,
                    currentScript: state[state.currentIndex],
                    currentIndex: state.currentIndex + 1
                };
            
        default: 
            return state;
    }
}