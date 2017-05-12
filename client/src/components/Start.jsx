import React from "react"

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
        <button onClick={this.handleClick}>Start New Game</button>
      </div>
    )
  }

}

export default Start