import React from 'react';
import { connect } from 'react-redux';
import Choice from './Choice';
import {nextQuestion} from './actions';

const GameCard = props => {

let clickHandler = item => {
    console.log(props.choices);
    props.nextQuestion(item);
    console.log(choiceLoop);
  }
  let choiceLen = Object.keys(props.choices).length;
  let choiceLoop = []

  function NewLen() {

    for (let i = 0; i < choiceLen; i++) {
        choiceLoop.push(<div><Choice /> <p>{props.choices[i]}</p></div>);
    }
}

    return(
        <div className="game-question-card">
            <div className="question-card-header">
            {/* Image/GIF will go here */}

{/* //will become a Redux item or prop....=currentIndex.script */}
            {/* <h4>{"It's your first day on the job and Beyonce is getting ready for a red carpet. What are you getting her for breakfast? Yogurt, granola and strawberries or a 5 star breakfast."}</h4> */}
            <h2>{props.script}</h2>
            </div>

            <div className="game-choice-menu">
                {/* Each of these should be a Redux option. Will be rendered using a For Loop...for i in choices */}

                <div>
                    {choiceLen ? (
                        <ul>
                            {Object.values(props.choices).map(item => (
                               <div className="choice-item"> <Choice /> <p>{item}</p>  </div>
                            ))}
                        </ul>
                    ) 
                    : (<p>All done!</p>)}
                </div>

                <button onClick={() => {
                clickHandler({
                    // currentScript: "Here I am!"
                }); NewLen();
                }}>Click Me</button>
                
            </div>

        </div>
    );

}

const mapStateToProps = state => {
    return {
        script: state.game[state.currentIndex].script,
        currentIndex: state.currentIndex,
        choices: state.game[state.currentIndex].choices
    }
}

export default connect(
    mapStateToProps,
     {nextQuestion})(GameCard); 