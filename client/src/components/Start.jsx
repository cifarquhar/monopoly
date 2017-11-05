import React from "react"
import {Button} from "react-bootstrap"

class Start extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {

    }
  }

  handleClick(){
    this.props.startGame()
  }


  render(){
    return(
      <div className="start-div">
        <Button onClick={this.handleClick}>Start New Game</Button>
      </div>
    )
  }


}

export default Start