import React from "react"
import Board from "../components/Board"
import PlayerStats from "../components/PlayerStats"
import Dice from "../components/Dice"
import Start from "../components/Start"
import End from "../components/End"
import Buy from "../components/Buy"
import PropertyStats from "../components/PropertyStats"
import Escape from "../components/Escape"

class GameContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      squares: this.props.properties,
      chanceCards: this.props.chance,
      chestCards: this.props.chest,
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
    console.log(this.state.chanceCards)
    this.setState({chanceCards: this.shuffle(this.state.chanceCards),
                  chestCards: this.shuffle(this.state.chestCards),
                  moveValue: null,
                  activePlayer: this.state.players[0],
                  activePlayerIndex: 0,
                  won: false})
   }

  shuffle(a){
    const shuffledArray = [...a]
    for (let i = shuffledArray.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [shuffledArray[i - 1], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i - 1]];
    }
    return shuffledArray
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
    
    let currentSquare = this.state.squares[currentPlayer.position]

    if (currentPlayer.money < currentSquare.value){
      alert("Not enough money to purchase that")
    }
    else if (currentSquare.owner){
      alert("Someone already owns this property")
    }
    else if (!currentSquare.value){
      alert("You can't buy this type of property")
    }
    else {
      currentPlayer.properties.push(currentSquare)
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

    let currentSquare = this.state.squares[currentPlayer.position]

    if (currentSquare.group === "tax"){
      currentPlayer.payRent(currentSquare)
    }
    else if (currentSquare.group === "utility" && currentSquare.owner){
      currentPlayer.money = currentPlayer.money - (currentSquare.rentValues[currentSquare.rentIndex] * this.state.moveValue)
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

    let chanceCard

    if (square.group === "bonus" && square.name === "Chance"){
      let card = this.state.chanceCards.shift()
      console.log(card)
      card.applyMethod(this.state.activePlayer)
      this.state.chanceCards.push(card)
      alert("Landed on " + square.name + "\n" + "\n" + card.text)
    }
    else if (square.group === "bonus" && square.name === "Community Chest"){
      let card = this.state.chestCards.shift()
      console.log(card)
      
      if (card.text === "It is your birthday, collect £10 from each player"){
        this.state.activePlayer.money = this.state.activePlayer.money + 10
        this.state.players.forEach((player) => {
          if (player !== this.state.activePlayer){
            player.money = player.money - 10
          }
        })
        this.state.chestCards.push(card)
        alert("Landed on " + square.name + "\n" + "\n" + card.text)
      }

      else if (card.text === "Pay a £10 fine (OK) or take a Chance (cancel)"){
        if (confirm("Landed on " + square.name + "\n" + "\n" + card.text) == true){
          chanceCard = this.state.chanceCards.shift()
          chanceCard.applyMethod(this.state.activePlayer)
          this.state.chanceCards.push(chanceCard)
          alert(chanceCard.text)
        }
        else {
          this.state.activePlayer.money = this.state.activePlayer.money - 10
        }
        this.state.chestCards.push(card)
      }


      else {
        card.applyMethod(this.state.activePlayer)
        this.state.chestCards.push(card)
        alert("Landed on " + square.name + "\n" + "\n" + card.text)
      }
    }
  }

  checkSpecialSquare(){

    let currentPlayer = this.state.activePlayer

    let currentSquare = this.state.squares[currentPlayer.position]

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
      alert(currentPlayer.name + " is bankrupt!")
      this.setState({won: true})
    }
  }

  handleEscapeClick(){
    this.state.activePlayer.leaveJail()
  }

  render(){

    let currentSquare = null

    let currentPlayer = this.state.activePlayer

    if (currentPlayer){
      currentSquare = this.state.squares[currentPlayer.position]
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
        <Escape handleClick={this.handleEscapeClick.bind(this)}/>
        <End updateActivePlayer={this.updateActivePlayer.bind(this)}/>
      </div>
    )
  }

}


export default GameContainer