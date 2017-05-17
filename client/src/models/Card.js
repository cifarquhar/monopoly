

class Card {

  constructor(text,method,adjustor){
  this.text = text
  this.method = method
  this.adjustor = adjustor
  }



  adjustPosition(player){
    player.state.position = this.adjustor
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