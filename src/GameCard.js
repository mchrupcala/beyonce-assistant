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
//   let incVals = Object.values(props.choices).map(item => item[1]);

  // Why do I need this stuff, and the second function call of newLen() on line 60? Might be useless but keep it around to find out.
//   let choiceLoop = []

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
        <div className="gamecard">
        <div className="game-question-card">
            <div className="question-card-header">
            <div className="media-container">
                {props.mediaType === "img" ? (<img src={props.media} alt="Game file."></img>)
                 : (
                    <video autoPlay loop muted playsInline key={props.media}>
                    <source src={props.media} type="video/mp4"></source>
                </video>
                  )}
            </div>
            </div>

            <div className="game-choice-menu">
            <h3>{props.script}</h3>
                <div className="game-choices">
                    {choiceLen ? (
                        <ul>
                            {Object.values(props.choices).map(item => (
                               <div className="choice-item" onClick={() => {
                                clickHandler({
                                    clickedOption: item[1]
                                }) }}>  <p>{item[0]}</p>  </div>
                                //    props.game[state.currentIndex].choices[i][2]
                             
                            ))}
                        </ul>
                    ) 
                    : (<p>Play again?</p>)}
                </div>

                

                {/* Check the current indexes state */}
                 {/* <button onClick={console.log(props.currentIndex, props.lastIndex)}>Check state</button> */}
                
            </div>

            

        </div>
        <div className="border-div"></div>

        <div className="button-div">
        <button onClick={() => {
        backHandler({
            here: "Here!"
        })
        // ; NewLen();
        }}>Back</button>

        <button className="restart" onClick={() => {
            restartHandler({
                val: "here!"
            })
        } }>Restart</button>
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
        mediaType: state.game[state.currentIndex].media.type,
        media: state.game[state.currentIndex].media.url
    }
}

export default connect(
    mapStateToProps,
     {nextQuestion, lastQuestion, restart})(GameCard); 