import React from "react"

class PropertyInfo extends React.Component{

  constructor(props){
    super(props)
    this.state = {

    }
  }

  // getDevelopmentCost(property){
  //   if (property.housePrice){
  //     return property.housePrice
  //   }
  //   else{
  //     return "N/A"
  //   }
  // }

  render(){

    let name

    let price

    if (this.props.property && this.props.property.housePrice){

      name = this.props.property.name

      price = this.props.property.housePrice
    }

    else if (this.props.property){

      name = this.props.property.name

      price = "N/A"

    }

    return(
      <div className="property-info-div">
        <p><b>Property Name:</b> {name}</p>
        <p><b>No. properties in group owned:</b> </p>
        <p><b>Development cost:</b> {price}</p>
      </div>
    )
  }

}

export default PropertyInfo