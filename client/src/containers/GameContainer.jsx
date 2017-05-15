import React from "react"
import Board from "../components/Board"
import PlayerStats from "../components/PlayerStats"
import Dice from "../components/Dice"
import Start from "../components/Start"
import End from "../components/End"
import Buy from "../components/Buy"

class GameContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      squares: this.props.properties,
      moveValue: null,
      players: this.props.players,
      activePlayer: null,
      activePlayerIndex: null,
      rolled: false,
      won: false
    }
  }

  startGame(){
    this.state.players.forEach(function(player){
      player.resetPosition()
    })
    this.setState({activePlayer: this.state.players[0]})
    this.setState({activePlayerIndex: 0})
    this.setState({won: false})
  }

  updateActivePlayer(){
    if (this.state.rolled){
      this.setState({activePlayer: this.state.players[(this.state.activePlayerIndex + 1) % (this.state.players.length)]})
      this.setState({activePlayerIndex: (this.state.activePlayerIndex + 1) % (this.state.players.length)})
      this.setState({rolled: !this.state.rolled})
    }
  }

  setMoveValue(newValue){
    this.setState({moveValue: newValue})
  }

  updatePlayerPosition(moveValue){
    this.state.activePlayer.updatePosition(moveValue)
    this.payRentIfDue()
    this.checkBankruptcy()
  }

  updateRolled(){
    this.setState({rolled: !this.state.rolled})
  }

  purchaseProperty(){
    let currentPlayer = this.state.activePlayer
    
    let currentSquare = this.state.squares[currentPlayer.state.position]

    if (currentPlayer.state.money < currentSquare.value){
      return
    }
    else if (currentSquare.owner || !currentSquare.value){
      return
    }
    else {
      currentPlayer.state.properties.push(currentSquare)
      currentSquare.owner = currentPlayer
      currentPlayer.payForProperty(currentSquare)
    }
  }

  payRentIfDue(property){
    let currentPlayer = this.state.activePlayer
        
    let currentSquare = this.state.squares[currentPlayer.state.position]

    if (!currentSquare.owner || currentSquare.owner === currentPlayer){
      return
    }
    else{
      currentPlayer.payRent(currentSquare)
      currentSquare.owner.receiveRent(currentSquare)
    }

  }


  checkBankruptcy(){
    let currentPlayer = this.state.activePlayer

    let funds = currentPlayer.checkFunds()

    if (funds < 0){
      alert(currentPlayer.state.name + " is bankrupt!")
      this.setState({won: true})
    }
  }

  render(){
    return(
      <div className="container-div" >
        <h1>Monopoly!</h1>
        <Start startGame={this.startGame.bind(this)}/>
        <PlayerStats player={this.state.activePlayer}/>
        <Board squares={this.state.squares}
               players={this.state.players}/>
        <Dice moveValue={this.state.moveValue} 
              setMoveValue={this.setMoveValue.bind(this)}
              updatePlayerPosition={this.updatePlayerPosition.bind(this)}
              rolled={this.state.rolled}
              won={this.state.won}
              updateRolled={this.updateRolled.bind(this)}/>
        <Buy handleClick={this.purchaseProperty.bind(this)}/>
        <End updateActivePlayer={this.updateActivePlayer.bind(this)}/>
      </div>
    )
  }

}


export default GameContainer