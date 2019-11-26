// import React, {useState} from 'react';
import media0 from '../images/0.jpg';
import media1 from '../video/0.mp4';
import media2 from '../images/2.jpg';
import media4 from '../images/4.jpg';
import media6 from '../images/6.jpg';
import media8 from '../images/8.jpg';
import media16 from '../images/16.jpg';
import media21 from '../video/21.mp4';
import media24 from '../images/24.jpg';
import media36 from '../images/36.jpg';
import winner from '../images/winner.jpg';
import media7 from '../video/7.mp4';
import media10 from '../video/10.mp4';
import media11 from '../video/11.mp4';
import media13 from '../video/13.mp4';
import media14 from '../video/14.mp4';
import media15 from '../video/15.mp4';
import media18 from '../video/18.mp4';
import media19 from '../video/19.mp4';
import media20 from '../video/20.mp4';
import media22 from '../video/22.mp4';
import media23 from '../video/23.mp4';
import media25 from '../video/25.mp4';
import media28 from '../video/28.mp4';
import media29 from '../video/29.mp4';
import media30 from '../video/30.mp4';
import media31_32 from '../video/31_32.mp4';
import media33 from '../video/33.mp4';
import media34 from '../video/34.mp4';
import media37 from '../video/37.mp4';
import media38 from '../video/38.mp4';
import media39 from '../video/39.mp4';
import media40 from '../video/40.mp4';
import media41 from '../video/41.mp4';
import {NEXT_QUESTION, LAST_QUESTION, RESTART} from '../actions/index';


export const initialState = {
    currentScript: "It's your first day on the job and Beyonce is getting ready for a red carpet. What are you getting her for breakfast? Yogurt, granola and strawberries or a 5 star breakfast.",
    currentIndex: 0,
    lastIndex: [],
    score: 0,
    // media: {
    //     type: "",
    //     url: 
    // },
    game: [
        {
            script: "It's your first day on the job and Beyonce is getting ready for a red carpet. What are you getting her for breakfast? Yogurt, granola and strawberries or a 5 star breakfast.",
            outcome: null,
            media: {
                type: "img",
                url: media0
            },
            choices: {
               ch1: ["Click here if you chose the yogurt, granola and strawberries", 2],
               ch2: ["Click here if you chose the 5 star breakfast", 1]
            },
            pass: null
        }, 
        {
           script: "She yells at you 'Are you trying to make me fat like you?!' then has her team of lawyers send you a termination letter.",
           outcome: "failed",
           media: {
            type: "vid",
            url: media1
        },
           choices: {
   
            },
           pass: null
       }, 
       {
           script: "She nods at you for choosing the healthy breakfast, then asks you to FaceTime her daughter. Who are you FaceTiming, Blue or Rumi?",
           outcome: null,
           media: {
            type: "img",
            url: media2
        },
           choices: {
               ch1: ["Click here if you're FaceTiming Rumi.", 1],
               ch2: ["Click here if you're FaceTiming Blue Ivy.", 2]
            },
           pass: null
       },
       {
           script: "She says 'She's only 2...' then has her team of lawyers send you a termination letter.",
           outcome: "failed",
           media: {
            type: "vid",
            url: media1
        },
           choices: {

            },
           pass: null
       },
       {
           script: "She FaceTimes Blue. Beyonce needs something to do while she waits for hair and makeup. What do you suggest? Swimming, painting, or drinking and gossiping.",
           outcome: null,
           media: {
            type: "img",
            url: media4
        },
           choices: {
               ch1: ["Click here if you chose swimming.", 2],
               ch2: ["Click here if you chose painting.", 3],
               ch3: ["Click here if you chose drinking and gossiping.", 1]
            },
           pass: null
       },
       {
           script: "She tells you 'I'm not going to get drunk before an event and gossip with some peasant' then calls a new assistant.",
           outcome: "failed",
           media: {
            type: "vid",
            url: media1
        },
           choices: {

            },
           pass: null
       },
       {
           script: "She goes swimming. Beyonce is done swimming and hair and makeup is here. Do you suggest she takes a shower and makes the stylist team wait or just dry off?",
           outcome: null,
           media: {
            type: "img",
            url: media6
        },
           choices: {
               ch1: ["Click here if you chose to dry off.", 2],
               ch2: ["Click here if you chose to take a shower and keep the stylist team waiting.", 3]
            },
           pass: null
       },
       {
           script: "She paints. She tells you to play that song from Lemonade. Which song you playing Sandcastles or All Night?",
           outcome: null,
           media: {
            type: "vid",
            url: media7
        },
           choices: {
               ch1: ["Click here if you chose Sandcastles.", 3],
               ch2: ["Click here if you chose All Night.", 4]
            },
           pass: null
       },
       {
           script: "The application for the makeup and body makeup is ruined from the chlorine. You've been FIRED.",
           outcome: "failed",
           media: {
            type: "img",
            url: media8
        },
           choices: {

            },
           pass: null
       },
       {
           script: "Beyonce's hair is WET causing even more time making her late to the event. You've been fired.",
           outcome: "failed",
           media: {
            type: "vid",
            url: media1
        },
           choices: {

            },
           pass: null
       },
       {
           script: "She starts crying then fires you after the 3:03 minutes.",
           outcome: "failed",
           media: {
            type: "vid",
            url: media10
        },
           choices: {

            },
           pass: null
       },
       {
           script: "She says 'Oh yes that's the one.' and sings along while painting. Beyonce is running late should she go to the hotel and get ready or do it in the car?",
           outcome: null,
           media: {
            type: "vid",
            url: media11
        },
           choices: {
               ch1: ["Click here if she should get ready in the car.", 1],
               ch2: ["Click here if she should go to the hotel and get ready.", 2]
            },
           pass: null
       },
       {
           script: "She got car sick and threw up all over her outfit. You've been kicked out the car and fired.",
           outcome: "failed",
           media: {
            type: "vid",
            url: media1
        },
           choices: {

            },
           pass: null
       },
       {
           script: "She's arrived at the hotel but the paparazzi have already spotted her Mercedes Sprinter. Should she risk being spotted at this event that she's supposed to make a surprise appearance or run late and go to another hotel?",
           outcome: null,
           media: {
            type: "vid",
            url: media13
        },
           choices: {
               ch1: ["Click here if she should risk being spotted.", 1],
               ch2: ["Click here if she should run late and go to another hotel.", 2]
            },
           pass: null
       },
       {
        // 14
           script: "She was thankfully not been spotted, she's making her way to the presidential suite 10 floors upstairs should she ditch everyone and go by herself so she doesn't draw attention or take the risk and go with her team?",
           outcome: null,
           media: {
            type: "vid",
            url: media14
        },
           choices: {
               ch1: ["Click here if she should go alone to the presidential suite.", 2],
               ch2: ["Click here if she should go with her team to the presidential suite.", 3]
            },
           pass: null
       },
       {
           script: "The west family offer her to join them in their suite and Motel 6 is able to provide a whole floor. Which do you suggest?",
           outcome: null,
           media: {
            type: "vid",
            url: media15
        },
           choices: {
               ch1: ["Click here if you chose the West suite.", 3],
               ch2: ["Click here if you chose the Motel 6.", 4]
            },
           pass: null
       },
       {
           script: "Beyonce was kidnapped so Beyonce's other assistant fires you.",
           outcome: "failed",
           media: {
            type: "img",
            url: media16
        },
           choices: {

            },
           pass: null
       },
       {
           script: "She's been spotted and you ruin a whole era so she fires you.",
           outcome: "failed",
           media: {
            type: "vid",
            url: media1
        },
           choices: {

            },
           pass: null
       },
       {
           script: "Beyonce says nothing. Julius has fired you.",
           outcome: "failed",
           media: {
            type: "vid",
            url: media18
        },
           choices: {

            },
           pass: null
       },
       {
           //19
           script: "Beyonce says 'You know me so well.' Beyonce asks you to tell her lawyers who needs a cease and desist who you telling them about? Beycapital or Bey_Legion?",
           outcome: null,
           media: {
            type: "vid",
            url: media19
        },
           choices: {
               ch1: ["Click here if you chose BeyCapital.", 4],
               ch2: ["Click here if you chose Bey_Legion.", 1]
            },
           pass: null
       },
       {
           script: "Her secret twitter home is filled with tweets saying 'Fuck Beyonce' she thanks you and laughs. Beyonce asks if you know any other ways to piss off the beyhive what do you suggest? What do you suggest no FWT or more ugly merch?",
           outcome: null,
           media: {
            type: "vid",
            url: media20
        },
           choices: {
               ch1: ["Click here if you chose more ugly merch.", 1],
               ch2: ["Click here if you chose no FWT.", 2]
            },
           pass: null
       },
       {
           script: "You've offended her, she fires you.",
           outcome: null,
           media: {
            type: "vid",
            url: media21
        },
           choices: {

            },
           pass: null
       },
       {
           //22
           script: "Beyonce jots that down in her notes and sends an email to her parkwood team. Anyways congrats if you've made it this far for the first portion. You're minutes away from the hotel what changes do you need to have made before Beyonce arrives. Red toilet paper, newly painted walls, titanium drinking straws, or 100% cotton uniforms for the staff.",
           outcome: null,
           media: {
            type: "vid",
            url: media22
        },
           choices: {
               ch1: ["Click here if you chose titanium drinking straws.", 10],
               ch2: ["Click here if you chose freshly painted walls.", 2],
               ch3: ["Click here if you chose red toilet paper.", 3],
               ch4: ["Click here if you chose 100% cotton uniforms.", 9]
            },
           pass: null
       },
       {
           script: "Her lawyers look into it and see how much money they've been profiting and she gives it to you as a bonus. Anyways congrats if you've made it this far for the first portion. You're minutes away from the hotel what changes do you need to have made before Beyonce arrives. Red toilet paper, newly painted walls, titanium drinking straws, or 100% cotton uniforms for the staff.",
           outcome: null,
           media: {
            type: "vid",
            url: media23
        },
           choices: {
            ch1: ["Click here if you chose titanium drinking straws.", 9],
            ch2: ["Click here if you chose freshly painted walls.", 1],
            ch3: ["Click here if you chose red toilet paper.", 2],
            ch4: ["Click here if you chose 100% cotton uniforms.", 8]
            },
           pass: null
       },
       {
           script: "Beyonce has passed out from breathing in the fresh paint. You're fired.",
           outcome: null,
           media: {
            type: "img",
            url: media24
        },
           choices: {

            },
           pass: null
       },
       {
           //25
           script: "She hasn't went to the bathroom yet so she hasn't noticed the red toilet paper. Beyonce says she's a little hungry. What are you getting her fruit, deli tray, juicy baked chicken, or desert?",
           outcome: null,
           media: {
            type: "vid",
            url: media25
        },
           choices: {
               ch1: ["Click here if you chose desert.", 1],
               ch2: ["Click here if you chose the deli tray.", 2],
               ch3: ["Click here if you chose juicy baked chicken.", 4],
               ch4: ["Click here if you chose fruit.", 3]
            },
           pass: null
       },
       {
           script: "Beyonce yells at you for trying to tempt her to break her diet and fires you.",
           outcome: null,
           media: {
            type: "vid",
            url: media1
        },
           choices: {

            },
           pass: null
       },
       {
        script: "Beyonce throws the tray at you then fires you.",
        outcome: null,
        media: {
            type: "vid",
            url: media1
        },
        choices: {

         },
        pass: null
    },
    {
        //28
        script: "Beyonce depressingly eats the fruit. Beyonce asks if you made sure the event organizer had her seated away from a certain someone. Who is she referring to? Tiffany Haddish or Nicki Minaj?",
        outcome: null,
        media: {
            type: "vid",
            url: media28
        },
        choices: {
            ch1: ["Click here if you chose Nicki Minaj.", 13],
            ch2: ["Click here if you chose Tiffany Haddish.", 14]
         },
        pass: null
    },
    {
        script: "Beyonce cheats her diet she asks you not to tell. Beyonce is almost ready for the event what should you make sure she gets done before she leaves? Taking pictures for Instagram or going over her speech?",
        outcome: null,
        media: {
            type: "vid",
            url: media29
        },
        choices: {
            ch1: ["Click here if you chose taking pictures on Istagram.", 1],
            ch2: ["Click here for going over her speech.", 1]
         },
        pass: null
    },
    {
        script: "Beyonce has to use the bathroom and fires you for thinking she uses red toilet paper.",
        outcome: null,
        media: {
            type: "vid",
            url: media30
        },
        choices: {

         },
        pass: null
    },
    {
        script: "Beyonce doesn't notice. Beyonce's laptop went missing! What are you doing? Looking for it yourself or letting the hotel beware it's missing or both?",
        outcome: null,
        media: {
            type: "vid",
            url: media31_32
        },
        choices: {
            ch1: ["Click here if you chose looking for it yourself.", 3],
            ch2: ["Click here if you chose letting the hotel beware of the missing laptop.", 2],
            ch3: ["Click here if you chose to look for it and let the hotel know the laptop is missing.", 7]
         },
        pass: null
    },
    {
        script: "Beyonce takes back the bonus for you spending $800 on straws. Beyonce's laptop went missing! What are you doing? Looking for it yourself or letting the hotel beware it's missing or both?",
        outcome: null,
        media: {
            type: "vid",
            url: media31_32
        },
        choices: {
            ch1: ["Click here if you chose looking for it yourself.", 2],
            ch2: ["Click here if you chose letting the hotel beware of the missing laptop.", 1],
            ch3: ["Click here if you chose to look for it and let the hotel know the laptop is missing.", 7]
         },
        pass: null
    },
    { 
        //33
        script: "You've let the hotel beware and one of the motel 6 employees stole it and leaked Byeonce's work and private information. You're fired.",
        outcome: null,
        media: {
            type: "vid",
            url: media33
        },
        choices: {

         },
        pass: null
    },
    {
        script: "Where are you looking for it, the first hotel floor or the car?",
        outcome: null,
        media: {
            type: "vid",
            url: media34
        },
        choices: {
            ch1: ["Click here if you chose the hotel floor.", 1],
            ch2: ["Click here if you chose the car.", 2]
         },
        pass: null
    },
    {
        script: "You've been running around drawing attention, Beyonce has been spotted. You're fired.",
        outcome: null,
        media: {
            type: "vid",
            url: media1
        },
        choices: {

         },
        pass: null
    },
    {
        script: "It was in the car. Beyonce asks you what color lighting would look cute with her outfit, what color you picking blue or white?",
        outcome: null,
        media: {
            type: "img",
            url: media36
        },
        choices: {
            ch1: ["Click here if you chose blue lighting.", 1],
            ch2: ["Click here if you chose white lighting.", 6]
         },
        pass: null
    },
    { 
        //37
        script: "Beyonce says 'Do you even know me?' then fires you.",
        outcome: null,
        media: {
            type: "vid",
            url: media37
        },
        choices: {

         },
        pass: null
    },
    {
        //38
        script: "Someone has found it but are blackmailing you for money or they'll leak everything on it. What are you doing telling Beyonce or trying to negotiate with them?",
        outcome: null,
        media: {
            type: "vid",
            url: media38
        },
        choices: {
            ch1: ["Click here if you chose to tell Beyonce.", 2],
            ch2: ["Click here if you chose to negotiate with them.", 1]
         },
        pass: null
    },
    {
        script: "It was a trick to see if you would tell Beyonce that someone was threatening to leak her stuff on her laptop. You've been fired.",
        outcome: null,
        media: {
            type: "vid",
            url: media39
        },
        choices: {

         },
        pass: null
    },
    {
        script: "Beyonce's team handles it and nods and says thank you. Beyonce asks if you made sure the event organizer had her seated away from a certain someone. Who is she referring to? Tiffany Haddish or Nicki Minaj?",
        outcome: null,
        media: {
            type: "vid",
            url: media40
        },
        choices: {
            ch1: ["Click here if you chose Nicki Minaj.", 1],
            ch2: ["Click here if you chose Tiffany Haddish.", 2]
         },
        pass: null
    },
    {
        //41
        script: "Nicki Minaj texts her from the event that she's seated way in the back, and Beyonce fires you.",
        outcome: null,
        media: {
            type: "vid",
            url: media41
        },
        choices: {

         },
        pass: null
    },    
    {
        //winner
        script: "It's time for the event!",
        outcome: "You Win!",
        media: {
            type: "img",
            url: winner
        },
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
    }
    ]
 
};

//for some reason I can't get my action to call my reducer...must be something wrong with the Redux mapping

export const reducer = (state = initialState, action) => {
        switch (action.type) {

        case NEXT_QUESTION: 
        return {
                ...state,
                
                currentScript: state.game[state.currentIndex].script,
                
                lastIndex: state.lastIndex.concat((state.currentIndex)),
                
                currentIndex: state.currentIndex + action.payload.clickedOption,
                
                score: (state.game[state.currentIndex + action.payload.clickedOption].outcome === "failed" ? 0 : state.score + 100) 
                
            };

        case LAST_QUESTION:
            return {
                ...state,
                currentIndex: state.lastIndex.pop(),
                currentScript: state.game[state.currentIndex].script
            };

        case RESTART:
            return {
                ...state,
                currentIndex: 0,
                lastIndex: []
            }
            
        default: 
            return state;
            // console.log('reducer');
            
            //     currentScript: "Ayyy new Script"
    
            
            
        }
    }
