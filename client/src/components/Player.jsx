class Player {

  constructor(name){
    this.state = {
      name: name,
      position: 0,
      money: 1500,
      properties: []
    }
  }

  updatePosition(moveValue){
    this.state.position =  (this.state.position + moveValue) % 40
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

}

export default Player