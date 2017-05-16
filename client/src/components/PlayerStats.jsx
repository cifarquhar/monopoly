import React from "react"
import PropertyInfo from "./PropertyInfo"

class PlayerStats extends React.Component{

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      selectedProperty: null,
      selectedPropertyIndex: null
    }
  }

  getPropertyList(){
    let ownedProperties = []
    if (this.props.player && this.props.player.state.properties){
      ownedProperties = this.props.player.state.properties.map((property,index) => {
       return <option key={index+1} value={index+1}>{property.name}</option>
      })
    }
    ownedProperties.unshift(<option key={0} value={0}>Select a property</option>)
    return ownedProperties
  }

  handleChange(){
    let indexToSet = document.querySelector("#property-selector").value - 1
    this.setSelectedIndex(indexToSet)
  }

  setSelectedIndex(index){
    this.setState({selectedPropertyIndex: index},this.setSelectedProperty)
  }

  setSelectedProperty(){

    if (this.props.player && this.props.player.state.properties){

     this.setState({selectedProperty: this.props.player.state.properties[this.state.selectedPropertyIndex]})

   }
 }




  render(){

    let name 

    let funds

    let propertyList = this.getPropertyList()


  if (this.props.player){
    name = this.props.player.state.name

    funds = this.props.player.state.money
}
    return(
      <div className="player-stats-div">
        <div style={{paddingRight: 50}}>
          <h4>Current Player: {name}</h4>
          <h4>Money: {funds}</h4>
        </div>
        <div style={{paddingRight: 50}}>
          <p><b>Properties:</b></p>
          <select id="property-selector" onChange={this.handleChange}>
            {propertyList}
          </select>
        </div>
        <div>
          <PropertyInfo property={this.state.selectedProperty}/>
        </div>
      </div>
    )
  }

}

export default PlayerStats