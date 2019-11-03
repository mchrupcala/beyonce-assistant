import React from 'react';
import { connect } from 'react-redux';
import {nextQuestion, lastQuestion, restart} from './actions';

const GameCard = props => {

let clickHandler = item => {
    props.nextQuestion(item);
    // console.log(choiceLoop);
  }

let backHandler = item => {
    props.lastQuestion(item);
}

let restartHandler = item => {
    props.restart(item);
}

  
  let choiceLen = Object.keys(props.choices).length;
  let incVals = Object.values(props.choices).map(item => item[1]);

  // Why do I need this stuff, and the second function call of newLen() on line 60? Might be useless but keep it around to find out.
  let choiceLoop = []

//   function NewLen() {

//     for (let i = 0; i < choiceLen; i++) {
//         if (props.choices[i] != null) {
//             choiceLoop.push(<div><Choice /> <p>{props.choices[i]}{incVals}</p></div>);
//         } else {
//             break;
//         }
//     }
// }

    return(
        <div className="game-question-card">
            <div className="question-card-header">
                
            <h2>Your score: {props.score}</h2>

            {/* Image/GIF will go here */}


            <h3>{props.script}</h3>
            
            </div>

            <div className="game-choice-menu">

                <div>
                    {choiceLen ? (
                        <ul>
                            {Object.values(props.choices).map(item => (
                               <div className="choice-item"> <button className="button" onClick={() => {
                                clickHandler({
                                    clickedOption: item[1]
                                }) }}
                                //    props.game[state.currentIndex].choices[i][2]
                            /> <p>{item[0]}</p>  </div>
                            ))}
                        </ul>
                    ) 
                    : (<p>All done!</p>)}
                </div>

                <button onClick={() => {
                backHandler({
                    here: "Here!"
                })
                // ; NewLen();
                }}>Back</button>

                <button onClick={() => {
                    restartHandler({
                        val: "here!"
                    })
                } }>Restart Game</button>

                {/* Check the current indexes state */}
                 {/* <button onClick={console.log(props.currentIndex, props.lastIndex)}>Check state</button> */}
                
            </div>

        </div>
    );

}

const mapStateToProps = state => {
    return {
        script: state.game[state.currentIndex].script,
        currentIndex: state.currentIndex,
        choices: state.game[state.currentIndex].choices,
        lastIndex: state.lastIndex,
        score: state.score
    }
}

export default connect(
    mapStateToProps,
     {nextQuestion, lastQuestion, restart})(GameCard); 