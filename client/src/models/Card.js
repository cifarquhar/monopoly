var Card = function(text,method){
  this.text = text
  this.method = method
}

Card.prototype = {

  adjustPosition: (player,position) => {
    player.state.position = position
  },

  increaseMoney: (player,amount) => {
    player.state.money = player.state.money + amount
  }

  decreaseMoney: (player,amount) => {
    player.state.money = player.state.money - amount
  }

  addJailCard: (player) => {
    player.state.jailCard = true
  }


}

module.exports = Card