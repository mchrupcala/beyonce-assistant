import React, {useState} from 'react';
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
      <Nav score={props.score}/>
      <header className="App-header">
        <h1>Beyonce's Assistant</h1>
        <GameCard nextQuestion={props.nextQuestion}/>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      blahscript: state.currentScript,
      score: state.score
  }
}

export default connect(
  mapStateToProps,
   {nextQuestion})(App); 