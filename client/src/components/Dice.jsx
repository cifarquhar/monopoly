import React from "react"

class Dice extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      
    }
  }

  getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleClick(){
    let newValue = this.getRandomInt(2,12)
    this.props.setMoveValue(newValue)
    this.props.updatePlayerPosition(newValue)
  }

  render(){
    return(
      <div className="dice-div">
        <button onClick={this.handleClick}>Roll Dice</button>
        <p>You rolled: {this.props.moveValue}</p>
      </div>
    )
  }



}

export default Dice