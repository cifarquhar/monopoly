class Player {

  constructor(name){
    this.state = {
      name: name,
      position: 0
    }
  }

  updatePosition(moveValue){
    this.state.position =  (this.state.position + moveValue) % 40
  }

  resetPosition(){
    this.state.position = 0
  }

}

export default Player