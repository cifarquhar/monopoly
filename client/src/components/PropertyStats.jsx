import React from "react"

class PropertyStats extends React.Component{

  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){

        let name = ""

        let value = ""

        let owner = ""

      if (this.props.property){
        name = this.props.property.name

        value = this.props.property.value

        if (this.props.property.owner){
         owner = this.props.property.owner.name
        }
    }

    return(
      <div className="property-stats-div">
        <h4>Current Property: {name}</h4>
        <h4>Price: {value}</h4>
        <h4>Owner: {owner}</h4>
      </div>
    )
  }

}

export default PropertyStats