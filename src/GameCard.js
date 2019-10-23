import React from 'react';
import Choice from './Choice';

function GameCard() {
    return(
        <div className="game-question-card">
            <div className="question-card-header">
            {/* Image/GIF will go here */}

{/* //will become a Redux item or prop */}
            <h4>{"It's your first day on the job and Beyonce is getting ready for a red carpet. What are you getting her for breakfast? Yogurt, granola and strawberries or a 5 star breakfast."}</h4>
            </div>

            <div className="game-choice-menu">
                {/* Each of these should be a Redux option. Will be rendered using a For Loop */}
                <div className="choice-item">
                     <Choice /> <p>{"Click here if you choose Blue."}</p>
                </div>
                <div className="choice-item">
                     <Choice /> <p>{"Click here if you choose Rumy."}</p>
                </div>
                <div className="choice-item">
                     <Choice /> <p>{"Click here if you choose Jay."}</p>
                </div>
                
            </div>

        </div>
    );
}

export default GameCard;