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
  const [bannerClick, setBannerClick] = useState(false);


  let clickHandler = (item) => {
    setIndex(index + 1);
    setClicked(!clicked);
    props.nextQuestion(item);
  }

  let bannerHandler = () => {
    setBannerClick(true);
  }

  return (
    <div className="App">
        <div className={bannerClick ? 'hide-banner' : "welcome-banner"} >
          <div className="banner-content">
            <h2>Think you have what it takes to be Bey's assistant for the day?</h2>
            <button className="banner-button" onClick={bannerHandler}>Yes/No?</button>
          </div>
        </div>

      <Nav score={props.score}/>
      <header className="App-header">
        <h1>Beyonce's Assistant</h1>
        <GameCard nextQuestion={props.nextQuestion}/>
      </header>
      <div>Inspired by Landon Rivera's  
        <a href="https://twitter.com/CORNYASSBITCH/status/1142591156884127744">Twitter game.</a>
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