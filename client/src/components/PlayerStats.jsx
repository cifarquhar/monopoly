import React from "react"

class PlayerStats extends React.Component{

  constructor(props){
    super(props)
    this.state = {

    }
  }

  getPropertyList(){
    let ownedProperties
    if (this.props.player && this.props.player.state.properties){
      ownedProperties = this.props.player.state.properties.map((property,index) => {
       return <option key={index} value={index}>{property.name}</option>
      })
    }
    return ownedProperties
  }

  // createSelectItems() {
  //      let items = [];         
  //      for (let i = 0; i <= this.props.maxValue; i++) {             
  //           items.push(<option key={i} value={i}>{i}</option>);   
  //           //here I will be creating my options dynamically based on
  //           //what props are currently passed to the parent component
  //      }
  //      return items;
  //  }  

  // onDropdownSelected(e) {
  //     console.log("THE VAL", e.target.value);
  //     //here you will see the current selected value of the select input
  // }


  render(){

    let name 

    let funds

    let propertyList = this.getPropertyList()
    console.log(propertyList)


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
        <div>
          <p>Properties:</p>
          <select>
            {propertyList}
          </select>
        </div>
      </div>
    )
  }

}

export default PlayerStats