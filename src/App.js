import React, {useState} from 'react';
import logo from './logo.svg';
import pic1 from "./assets/download-1.jpg";
import pic2 from "./assets/download.jpg";
import pic3 from "./assets/images.jpg";
import './App.css';
import Game from './components/Game';
import GameCard from './GameCard';
import Choice from './Choice';

function App() {
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);


  let clickHandler = () => {
    setIndex(index + 1);
    setClicked(!clicked);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Game /> */}
        <div className = { clicked ? "active-img" : ""}>
          <img src={pic1} className="game-img"></img>
          <img src={pic2} className="game-img"></img>
          <img src={pic3} className="game-img"></img>
        </div>

        <button onClick={clickHandler}>Click Me</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <GameCard />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
