class Property {

  constructor(name,shortName,group,subgroup,value,rents,housePrice){
    this.name = name
    this.shortName = shortName
    this.owner = null
    this.group = group
    this.subgroup = subgroup
    this.value = value
    this.rentIndex = 0
    this.rentValues = rents
    this.housePrice = housePrice
  }

}

export default Property