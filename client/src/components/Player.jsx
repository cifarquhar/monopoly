class Player {

  constructor(name){
    this.state = {
      name: name,
      position: 0,
      money: 1500,
      properties: [],
      inJail: false,
      jailCounter: null
    }
  }

  updatePosition(moveValue){
    if (this.state.inJail && this.state.jailCounter < 3){
      this.state.jailCounter = this.state.jailCounter + 1
    }
    else if (this.state.inJail && this.state.jailCounter === 3){
      this.state.jailCounter = null
      this.state.inJail = false
      this.state.position =  (this.state.position + moveValue) % 40
    }
    else {
    this.state.position =  (this.state.position + moveValue) % 40
  }
  }

  resetPosition(){
    this.state.position = 0
  }

  payForProperty(property){
    this.state.money = (this.state.money) - (property.value)
  }

  payRent(property){
    this.state.money = (this.state.money) - (property.rent)
  }

  receiveRent(property){
    this.state.money = (this.state.money) + (property.rent)
  }

  checkFunds(){
    return this.state.money
  }

  goToJail(){
    this.state.position = 10
    this.state.inJail = true
    this.state.jailCounter = 0
  }

}

export default Player