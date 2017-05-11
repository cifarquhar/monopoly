import React from "react"

class Dice extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return(
      <div className="dice-div">
        <button>Roll Dice</button>
        <p>You rolled: {this.props.moveValue}</p>
      </div>
    )
  }



}

export default Dice