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
      if (this.state.position + moveValue >= 40){
        this.state.money = this.state.money + 200
      }
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
    console.log(property.rentValues[property.rentIndex])
    this.state.money = (this.state.money) - (property.rentValues[property.rentIndex])
  }

  receiveRent(property){
    this.state.money = (this.state.money) + (property.rentValues[property.rentIndex])
  }

  checkFunds(){
    return this.state.money
  }

  goToJail(){
    this.state.position = 10
    this.state.inJail = true
    this.state.jailCounter = 0
  }

  checkCompleteGroupOwned(property){
    console.log(property)
    let groupToCheck = property.group

    if (this.state.properties){
      let groupPropertiesOwned = this.state.properties.filter((property) => {
        return property.group === groupToCheck
      })

      if ((groupToCheck === "brown" || groupToCheck === "dark_blue") && groupPropertiesOwned.length === 2){
        return {check: true, group: groupPropertiesOwned}
      }
      else if (groupPropertiesOwned.length === 3){
        return {check: true, group: groupPropertiesOwned}
      }
      else {
        return {check: false, group: groupPropertiesOwned}
      }
    }
  }

  countPropertiesInGroup(property){
    let groupToCheck = property.group

    let groupPropertiesOwned = []

    if (this.state.properties){
      groupPropertiesOwned = this.state.properties.filter((property) => {
        return property.group === groupToCheck
      })
    }

    return groupPropertiesOwned.length
  }

  developProperty(property){

    let ownershipCheck = this.checkCompleteGroupOwned(property)

    let ownershipCheckResult =ownershipCheck.check

    if (!property.housePrice){
      alert("Can't build houses on this type of property")
    }
    else if (!ownershipCheck.check){
      alert("You must own all properties in a group before building houses")
    }
    else if (this.state.money < property.housePrice){
      alert("Not enough money to develop this property")
    }
    else if (property.rentIndex === 6){
      alert("Can't develop this property any further")
    }
    else{
      if(property.rentIndex === 0){
        property.rentIndex = 1
      }
      property.rentIndex = property.rentIndex + 1
      this.state.money = this.state.money - property.housePrice
    }
  }

}

export default Player