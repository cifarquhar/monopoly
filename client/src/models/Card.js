

class Card {

  constructor(text,method,adjustor){
  this.text = text
  this.method = method
  this.adjustor = adjustor
  }



  adjustPosition(player){

    let oldPlayerPosition = player.position

    if (this.text === "Go to Jail"){
      player.goToJail()
    }
    else if (this.text === "Go back 3 spaces"){
      player.position -= 3
    }
    else {
      player.position = this.adjustor
    }

    if ((this.text !== "Go back to Old Kent Road") && (this.adjustor < oldPlayerPosition)){
      player.money += 200
    }


  }

  increaseMoney(player){
      player.money += this.adjustor
  }

  decreaseMoney(player) {


    let houseMultiplyer

    let hotelMultiplyer

    let dueForProperty

    let totalDue

    const chargeableRents = [2,3,4,5]

    if(this.text === "You are assessed for street repairs: £40 per house, £115 per hotel"){
      houseMultiplyer = 40
      hotelMultiplyer = 115
      totalDue = 0

      if (player.properties){
        player.properties.forEach((property) => {
          dueForProperty = 0
          if (property.rentIndex === 6){
            dueForProperty = hotelMultiplyer
          }
          else {
          chargeableRents.forEach((index) => {
            if (property.rentIndex === index){
              dueForProperty = index * houseMultiplyer
            }
          })
          }
          totalDue += dueForProperty
        })
      }
      player.money -= totalDue
    }
    else if (this.text === "Make general repairs on all of your houses. For each house pay £25, for each hotel pay £100"){
      houseMultiplyer = 25
      hotelMultiplyer = 100
      totalDue = 0

      if (player.properties){
        player.properties.forEach((property) => {
          dueForProperty = 0
          if (property.rentIndex === 6){
            dueForProperty = hotelMultiplyer
          }
          else {
          chargeableRents.forEach((index) => {
            if (property.rentIndex === index){
              dueForProperty = index * houseMultiplyer
            }
          })
          }
          totalDue += dueForProperty
        })
      }
      player.money -= totalDue
    }
    else {
      player.money -= this.adjustor
    }
  }

  addJailCard(player) {
    player.jailCard = true
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