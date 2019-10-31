import React from 'react';
import { connect } from 'react-redux';
import {nextQuestion} from './actions';

const Choice = () => {

    // let clickHandler = item => {
    //     props.nextQuestion(item);
    //     // console.log(choiceLoop);
    //   }

    return(
        <div>
            <button className="button" 
            // onClick={() => {
            //     clickHandler({
            //         clickedOption: item[1]
            //     }) }}
                                ></button>
        </div>
    );
}

export default Choice;

// const mapStateToProps = state => {
//     return {
//         // script: state.game[state.currentIndex].script,
//         // currentIndex: state.currentIndex,
//         // choices: state.game[state.currentIndex].choices,
//     }
// }

// export default connect(
//     mapStateToProps,
//      {nextQuestion})(Choice); 