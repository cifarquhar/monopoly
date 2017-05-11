import React from "react"
import Board from "../components/Board"
import Player from "../components/Player"

class GameContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    return(
      <div className="container-div">
        <h1>Monopoly!</h1>
        <Player/>
        <Board/>
      </div>
    )
  }

}


export default GameContainer