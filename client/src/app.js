import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from "./containers/GameContainer"
import Player from "./components/Player"

const player1 = new Player("P1")
const player2 = new Player("P2")

const players = [player1,player2]

window.onload = function(){
  ReactDOM.render(
    <GameContainer players={players}/>,
    document.getElementById('app')
  );
}
