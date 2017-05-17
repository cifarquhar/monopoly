

class Card {

  constructor(text,method,adjustor){
  this.text = text
  this.method = method
  this.adjustor = adjustor
  }



  adjustPosition(player){

    let oldPlayerPosition = player.state.position

    if (this.text === "Go to Jail"){
      player.goToJail()
    }
    else if (this.text === "Go back 3 spaces"){
      player.state.position = player.state.position - 3
    }
    else {
      player.state.position = this.adjustor
    }

    if ((this.text !== "Go back to Old Kent Road") && (this.adjustor < oldPlayerPosition)){
      player.state.money = player.state.money + 200
    }


  }

  increaseMoney(player){
    player.state.money = player.state.money + this.adjustor
  }

  decreaseMoney(player) {
    player.state.money = player.state.money - this.adjustor
  }

  addJailCard(player) {
    player.state.jailCard = true
  }


  lookupMethod(index,player){
    switch(index){
      case 1:
        this.adjustPosition(player)
        break
      case 2:
        this.increaseMoney(player)
        break
      case 3:
        this.decreaseMoney(player)
        break
      case 4:
        this.addJailCard(player)
        break
      default:
        return
    }
  }

  applyMethod(player){
    this.lookupMethod(this.method,player)
  }

}

export default Card