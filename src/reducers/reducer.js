// import React, {useState} from 'react';
import {NEXT_QUESTION} from '../actions/index';

export const initialState = {
    currentScript: "It's your first day on the job and Beyonce is getting ready for a red carpet. What are you getting her for breakfast? Yogurt, granola and strawberries or a 5 star breakfast.",
    currentIndex: 0,
    game: [
        {
            script: "It's your first day on the job and Beyonce is getting ready for a red carpet. What are you getting her for breakfast? Yogurt, granola and strawberries or a 5 star breakfast.",
            outcome: null,
            choices: {
               ch1: ["Click here if you chose the yogurt, granola and strawberries", 2],
               ch2: ["Click here if you chose the 5 star breakfast", 1]
            },
            pass: null
        }, 
        {
           script: "She yells at you 'Are you trying to make me fat like you?!' then has her team of lawyers send you a termination letter.",
           outcome: null,
           choices: {
   
            },
           pass: null
       }, 
       {
           script: "She nods at you for choosing the healthy breakfast, then asks you to FaceTime her daughter. Who are you FaceTiming, Blue or Rumi?",
           outcome: null,
           choices: {
               ch1: ["Click here if you're FacTiming Rumi.", 1],
               ch2: ["Click here if you're FacTiming Blue Ivy.", 2]
            },
           pass: null
       },
       {
           script: "She says 'She's only 2...' then has her team of lawyers send you a termination letter.",
           outcome: null,
           choices: {

            },
           pass: null
       },
       {
           script: "",
           outcome: null,
           choices: {
               ch1: ["", 1],
               ch2: ["", 2]
            },
           pass: null
       },
       {
           script: "",
           outcome: null,
           choices: {
               ch1: ["", 1],
               ch2: ["", 2]
            },
           pass: null
       }
    ]
 
};

//for some reason I can't get my action to call my reducer...must be something wrong with the Redux mapping

export const reducer = (state = initialState, action) => {
        switch (action.type) {

        case NEXT_QUESTION: 
                console.log("Made it to reducer!", action.payload.script);
            return {
                    ...state,
                    
                    currentScript: state.game[state.currentIndex].script,
                    currentIndex: state.currentIndex + action.payload.clickedOption
                    // currentIndex: 2,
                    // one: 
                    // state[state.currentIndex]
                    
                    // currentIndex: state.currentIndex + 1
                    
                };
            
        default: 
            return state;
            // console.log('reducer');
            
            //     currentScript: "Ayyy new Script"
    
            
            
        }
    }
