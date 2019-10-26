import React from 'react';
import { connect } from 'react-redux';
import Choice from './Choice';
import {nextQuestion} from './actions';

const GameCard = props => {

let clickHandler = item => {
    // setIndex(index + 1);
    // setClicked(!clicked);
    nextQuestion(item);
  }


    return(
        <div className="game-question-card">
            <div className="question-card-header">
            {/* Image/GIF will go here */}

{/* //will become a Redux item or prop....=currentIndex.script */}
            <h4>{"It's your first day on the job and Beyonce is getting ready for a red carpet. What are you getting her for breakfast? Yogurt, granola and strawberries or a 5 star breakfast."}</h4>
            <h2>{props.script}</h2>
            </div>

            <div className="game-choice-menu">
                {/* Each of these should be a Redux option. Will be rendered using a For Loop...for i in choices */}
                <div className="choice-item">
                     <Choice /> <p>{"Click here if you choose Blue."}</p>
                </div>
                <div className="choice-item">
                     <Choice /> <p>{"Click here if you choose Rumy."}</p>
                </div>
                <div className="choice-item">
                     <Choice /> <p>{"Click here if you choose Jay."}</p>
                </div>


                <button onClick={() => clickHandler({
                    here: "Here I am!"
                })}>Click Me</button>
                
            </div>

        </div>
    );

}

const mapStateToProps = state => {
    return {
        script: state.currentScript
    }
}

export default connect(
    mapStateToProps,
     {nextQuestion})(GameCard); 