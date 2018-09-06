import React from "react"
import { Button, ButtonToolbar, Modal, FormGroup, FormControl, Image } from "react-bootstrap"
import Board from "../components/Board"
import PlayerStats from "../components/PlayerStats"
import Dice from "../components/Dice"
import Player from "../models/Player"
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
      activePlayer: null,
      activePlayerIndex: null,
      rolled: false,
      won: false,
      showNewGameModal: false,
      showCardModal: false
    }

    this.playerNames = []
    this.players = []

    this.cardType = ""
    this.cardText = ""
    this.cardBackground = ""
    this.modalType = ""
  }

  startGame(){
    if (this.playerNames.length < 2) {
      alert("Please add at least two players")
    }
    else {
      this.playerNames.forEach(name => {
        if (name){
          let player = new Player(name.name, name.piece)
          this.players.push(player)
        }
      })
   
      this.setState({chanceCards: this.shuffle(this.state.chanceCards),
        chestCards: this.shuffle(this.state.chestCards),
        moveValue: null,
        activePlayer: this.players[0],
        activePlayerIndex: 0,
        won: false,
        showNewGameModal: false})
    }
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
      this.setState({activePlayer: this.players[(this.state.activePlayerIndex + 1) % (this.players.length)], 
                     activePlayerIndex: (this.state.activePlayerIndex + 1) % (this.players.length),  
                     rolled: !this.state.rolled,
                     moveValue: null})
    }
  }

  setMoveValue(newValue){
    this.setState({moveValue: newValue})
  }

  updatePlayerPosition(moveValue,double){
    if (double && this.state.activePlayer.inJail){
      this.state.activePlayer.leaveJailWithDouble()
    }
    else{
      this.state.activePlayer.updatePosition(moveValue)
      this.checkSpecialSquare()
      this.payRentIfDue()
      this.checkBankruptcy()
    }
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
      currentPlayer.money -= (currentSquare.rentValues[currentSquare.rentIndex] * this.state.moveValue)
      currentSquare.owner.money += (currentSquare.rentValues[currentSquare.rentIndex] * this.state.moveValue)
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
          currentSquare.rentIndex += 1
        }

        currentPlayer.payRent(currentSquare)
        currentSquare.owner.receiveRent(currentSquare)
      }
    }
  }


  applyChanceCard(){
    this.modalType = "confirm"
    this.cardType = "Chance"
    let card = this.state.chanceCards.shift()
    console.log(card)
    card.applyMethod(this.state.activePlayer)
    this.state.chanceCards.push(card)
    this.cardText = card.text
    this.cardBackground = "#FF6600"
    this.flipCardModalState()
  }

  applyChestCard(){
    this.modalType = "confirm"
    this.cardType = "Community Chest"
    let card = this.state.chestCards.shift()
    console.log(card)

    if (card.text === "Pay a £10 fine or take a Chance"){
      this.modalType = "choice"
      this.state.chestCards.push(card)
      this.cardText = card.text
      this.cardBackground = "#ECA3B3"
      this.flipCardModalState()
    }

    else {
      if (card.text === "It is your birthday, collect £10 from each player"){
        this.state.activePlayer.money += 10
        this.players.forEach((player) => {
          if (player !== this.state.activePlayer) {
            player.money -= 10
          }
        })
      }
      else {
        card.applyMethod(this.state.activePlayer)
      }

      this.state.chestCards.push(card)
      this.cardText = card.text
      this.cardBackground = "#ECA3B3"
      this.flipCardModalState()
    }
  }

  payChestCardFine() {
    this.state.activePlayer.money -= 10
    this.setState({ showCardModal: !this.state.showCardModal })
  }

  takeChestCardChance(){
    this.setState({showCardModal: false}, () => this.applyChanceCard())
  }

  checkCardSquare(square){
    if (square.group === "bonus" && square.name === "Chance"){
      this.applyChanceCard()
    }
    else if (square.group === "bonus" && square.name === "Community Chest"){
      this.applyChestCard()
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



  flipNewGameModalState(){
   this.setState({showNewGameModal: !this.state.showNewGameModal})
  }

  flipCardModalState() {
    this.setState({ showCardModal: !this.state.showCardModal })
  }


  clearPlayerDetails(){
    this.playerNames = []
    this.players = []
    this.flipNewGameModalState()
  }

  confirmNewGame(){
    if (!this.state.activePlayer){
      this.flipNewGameModalState()
    }
    else {
      const check = confirm("Are you sure you want to start a new game?")
      if (check) {
        this.clearPlayerDetails()
      }
    }
  }

  render(){

    let currentSquare = null

    let currentPlayer = this.state.activePlayer

    if (currentPlayer){
      currentSquare = this.state.squares[currentPlayer.position]
    }


    return(
      <div className="container-div" >
      <Board 
        squares={this.state.squares}
        players={this.players}
        player={this.state.activePlayer}
        property={currentSquare}
        purchaseClick={this.purchaseProperty.bind(this)}
        escapeClick={this.handleEscapeClick.bind(this)}
        moveValue={this.state.moveValue} 
        setMoveValue={this.setMoveValue.bind(this)}
        updatePlayerPosition={this.updatePlayerPosition.bind(this)}
        rolled={this.state.rolled}
        won={this.state.won}
        updateRolled={this.updateRolled.bind(this)}
        updateActivePlayer={this.updateActivePlayer.bind(this)}
        newGame={this.confirmNewGame.bind(this)}/>

        <Modal
          show={this.state.showNewGameModal}
          onHide={this.flipNewGameModalState}
          container={this}
          animation={false}>
          <Modal.Header>
            <Modal.Title>Player Setup</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <FormGroup>
                <Image src={require("../../public/images/battleship.jpeg")} alt="battleship" style={{height: "50px"}} rounded />
                <FormControl type="text" onChange={(e) => {this.playerNames[0] = {name: e.target.value, piece: "battleship"}}} placeholder="Player 1"/>
              </FormGroup>
              <FormGroup>
                <Image src={require("../../public/images/car.jpeg")} alt="car" style={{ height: "50px" }} rounded />
                <FormControl type="text" onChange={(e) => {this.playerNames[1] = {name: e.target.value, piece: "car"}}} placeholder="Player 2"/>
              </FormGroup>
              <FormGroup>
                <Image src={require("../../public/images/iron.jpeg")} alt="iron" style={{ height: "50px" }} rounded />
                <FormControl type="text" onChange={(e) => {this.playerNames[2] = {name: e.target.value, piece: "iron"}}} placeholder="Player 3"/>
              </FormGroup>
              <FormGroup>
                <Image src={require("../../public/images/barrow.jpeg")} alt="barrow" style={{ height: "50px" }} rounded />
                <FormControl type="text" onChange={(e) => {this.playerNames[3] = {name: e.target.value, piece: "barrow"}}} placeholder="Player 4"/>
              </FormGroup>
              <FormGroup>
                <Image src={require("../../public/images/dog.jpeg")} alt="dog" style={{ height: "50px" }} rounded />
                <FormControl type="text" onChange={(e) => {this.playerNames[4] = {name: e.target.value, piece: "dog"}}} placeholder="Player 5"/>
              </FormGroup>
              <FormGroup>
                <Image src={require("../../public/images/thimble.jpeg")} alt="thimble" style={{ height: "50px" }} rounded />
                <FormControl type="text" onChange={(e) => {this.playerNames[5] = {name: e.target.value, piece: "thimble"}}} placeholder="Player 6"/>
              </FormGroup>
            </form> 
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.startGame.bind(this)}>Start Game</Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.showCardModal}
          onHide={this.flipCardModalState}
          container={this}
          animation={false}
        >
          <Modal.Header style={{ background: this.cardBackground }}>
            <Modal.Title>{this.cardType}</Modal.Title>
          </Modal.Header>
          
          <Modal.Body style={{ background: this.cardBackground }}>
            {this.cardText}
          </Modal.Body>
          
          <Modal.Footer style={{ background: this.cardBackground }}>
            {this.modalType === "confirm" ?
            <Button onClick={this.flipCardModalState.bind(this)}>OK</Button>
            : 
            <ButtonToolbar>
              <Button onClick={this.payChestCardFine.bind(this)}>Pay fine</Button>
              <Button onClick={this.takeChestCardChance.bind(this)}>Take Chance</Button>
            </ButtonToolbar>
            }
          </Modal.Footer>
        </Modal>
      </div>
      )
  }

}


export default GameContainer