import React, {useState} from 'react';
import './App.css';
import GameCard from './GameCard';
import {nextQuestion} from './actions';
import { connect } from 'react-redux';
import Nav from './components/Nav';

const App = props => {
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [bannerClick, setBannerClick] = useState(false);


  let clickHandler = (item) => {
    setIndex(index + 1);
    setClicked(!clicked);
    props.nextQuestion(item);
  }

  console.log(clickHandler, "not using this right now");

  let bannerHandler = () => {
    setBannerClick(true);
  }

  return (
    <div className="App">
        <div className={bannerClick ? 'hide-banner' : "welcome-banner"} >
          <div className="banner-content">
            <h2>Think you have what it takes to be</h2>
            <h2>Bey's assistant for the day?</h2>
            <button className="banner-button" onClick={bannerHandler}>Yes!</button>
            <button className="banner-button">Probs not...</button>
          </div>
        </div>

      <Nav/>
      <header className="App-header">
        <h1>Beyonce's Assistant</h1>
        <div className="score-div"><h3>Your score: {props.score}</h3></div>
        <GameCard nextQuestion={props.nextQuestion}/>
      </header>
      <div>Inspired by Landon Rivera's  
        <a href="https://twitter.com/CORNYASSBITCH/status/1142591156884127744"> Twitter game.</a>
      </div>



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