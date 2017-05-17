var Card = function(text,method){
  this.text = text
  this.method = method
}

Card.prototype = {

  adjustPosition: (player,position) => {
    player.state.position = position
  }


}

module.exports = Card