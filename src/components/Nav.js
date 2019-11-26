import React from 'react';

const Nav = (props) => {
    return(
        <div className="nav-div">
            <ul className="navbar">
                {/* <li><a href="">Home</a></li> */}
                {/* <li><a href="">About</a></li> */}
                {/* <li><a href="">Contact</a></li> */}
            </ul>

            <div className="gamescore">
                <h2>Your score: {props.score}</h2>
            </div>
        </div>
    )
}

export default Nav;