import React from "react"
import Board from "../components/Board"
import PlayerStats from "../components/PlayerStats"
import Dice from "../components/Dice"
import Start from "../components/Start"

class GameContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      squares: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
      moveValue: null,
      players: this.props.players,
      activePlayer: null
    }
  }

  startGame(){
    this.state.players.forEach(function(player){
      player.state.position = 0
    })
    this.setState({activePlayer: this.state.players[0]})
  }

  setMoveValue(newValue){
    this.setState({moveValue: newValue})
  }

  updatePlayerPosition(moveValue){
    this.state.activePlayer.updatePosition(moveValue)
  }

  render(){
    return(
      <div className="container-div" >
        <h1>Monopoly!</h1>
        <Start startGame={this.startGame.bind(this)}/>
        <PlayerStats/>
        <Board squares={this.state.squares}/>
        <Dice moveValue={this.state.moveValue} 
              setMoveValue={this.setMoveValue.bind(this)}
              updatePlayerPosition={this.updatePlayerPosition.bind(this)}/>
      </div>
    )
  }

}


export default GameContainer