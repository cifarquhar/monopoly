import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from "./containers/GameContainer"
import Player from "./components/Player"

const player1 = new Player("Colin")

const players = [player1]

window.onload = function(){
  ReactDOM.render(
    <GameContainer players={players}/>,
    document.getElementById('app')
  );
}
