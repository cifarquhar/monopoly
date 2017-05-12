class Player {

  constructor(name){
    this.state = {
      name: name,
      position: 0
    }
  }

  updatePosition(moveValue){
    this.state.position =  this.state.position + moveValue
  }

}

export default Player