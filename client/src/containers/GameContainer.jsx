import React from "react"
import Board from "../components/Board"
import PlayerStats from "../components/PlayerStats"
import Dice from "../components/Dice"
import Start from "../components/Start"
import End from "../components/End"
import Buy from "../components/Buy"
import PropertyStats from "../components/PropertyStats"

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
      player.reset()
    })
    this.setState({moveValue: null})
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
    this.checkSpecialSquare()
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
      alert("Not enough money to purchase that")
    }
    else if (currentSquare.owner){
      alert("Someone already owns this property")
    }
    else if (!currentSquare.value){
      alert("You can't buy this type of property")
    }
    else {
      currentPlayer.state.properties.push(currentSquare)
      currentSquare.owner = currentPlayer
      currentPlayer.payForProperty(currentSquare)

      if (currentSquare.group === "station"){
        let stations = currentPlayer.checkCompleteGroupOwned(currentSquare).group
        stations.forEach((station) => {
          station.rentIndex = stations.length - 1
        })
      }
      else if (currentSquare.group === "utility"){
        let utilityCount = currentPlayer.countPropertiesInGroup(currentSquare)
        currentSquare.rentIndex = utilityCount
      }
    }
  }

  payRentIfDue(){
    let currentPlayer = this.state.activePlayer

    let currentSquare = this.state.squares[currentPlayer.state.position]

    if (currentSquare.group === "tax"){
      currentPlayer.payRent(currentSquare)
    }
    else if (currentSquare.group === "utility" && currentSquare.owner){
      currentPlayer.state.money = currentPlayer.state.money - (currentSquare.rentValues[currentSquare.rentIndex] * this.state.moveValue)
      currentSquare.owner.state.money = currentSquare.owner.state.money + (currentSquare.rentValues[currentSquare.rentIndex] * this.state.moveValue)
    }
    else{
      if (!currentSquare.owner || currentSquare.owner === currentPlayer){
        return
      }
      else{
        // console.log(property)
        let groupCheck = currentSquare.owner.checkCompleteGroupOwned(currentSquare).check
        console.log(groupCheck)

        if (groupCheck && currentSquare.rentIndex === 0){
          currentSquare.rentIndex = currentSquare.rentIndex + 1
        }

        currentPlayer.payRent(currentSquare)
        currentSquare.owner.receiveRent(currentSquare)
      }
    }
  }


  checkCardSquare(square){
    if (square.group === "bonus"){
      alert("Landed on " + square.name)
    }
  }

  checkSpecialSquare(){

    let currentPlayer = this.state.activePlayer

    let currentSquare = this.state.squares[currentPlayer.state.position]

    this.checkCardSquare(currentSquare)

    if (currentSquare.name === "Go To Jail"){
      alert("Go to jail!")
      currentPlayer.goToJail()
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

    let currentSquare = null

    let currentPlayer = this.state.activePlayer

    if (currentPlayer){
      currentSquare = this.state.squares[currentPlayer.state.position]
    }


    return(
      <div className="container-div" >
        <h1>Monopoly!</h1>
        <Start startGame={this.startGame.bind(this)}/>
        <span>
          <PlayerStats player={this.state.activePlayer}/>
          <PropertyStats property={currentSquare}/>
        </span>
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