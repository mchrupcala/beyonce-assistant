import React, {useState} from 'react';
import pic1 from "./assets/download-1.jpg";
// import pic2 from "./assets/download.jpg";
// import pic3 from "./assets/images.jpg";
import './App.css';
// import Game from './components/Game';
import GameCard from './GameCard';
// import Choice from './Choice';
import {nextQuestion} from './actions';
import { connect } from 'react-redux';
import Nav from './components/Nav';

const App = props => {
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);


  let clickHandler = (item) => {
    setIndex(index + 1);
    setClicked(!clicked);
    props.nextQuestion(item);
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">

        <div className = { clicked ? "active-img" : ""}>
          <img src={pic1} className="game-img" alt="Here's some text."></img>
          {/* <img src={pic2} className="game-img"></img> */}
          {/* <img src={pic3} className="game-img"></img> */}

          {/* <h2>{props.blahscript}</h2> */}
        </div>

        <button onClick={() => clickHandler({
                    script: "Here I am!"
                })}>Click Me</button>

        <GameCard nextQuestion={props.nextQuestion} script={props.blahscript}/>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      blahscript: state.currentScript,
      // one: state.one,
      // two: state.two
  }
}

export default connect(
  mapStateToProps,
   {nextQuestion})(App); 