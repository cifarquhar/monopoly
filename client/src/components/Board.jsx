import React from "react"
import Square from "./Square"

class Board extends React.Component{

  constructor(props){
    super(props)
    this.state = {
     
    }
  }

  render(){

    const playerPositions = this.props.players.map(function(player){
      return player.state.position
    })

    const squareNodes = this.props.squares.map((array, index)=>{

      return(
        <Square 
        key = {index} 
        value={this.props.squares[index]}
        id =  {"cell" + this.props.squares[index]}
        player={playerPositions.includes(index) ? this.props.players.find((player)=>{
                                                    return this.props.players.indexOf(player) === playerPositions.indexOf(index)
                                                   })
                                                : null}
        />
        )
    })

    return(
      console.log(playerPositions),
      <div className="board">
        {squareNodes}
      </div>
    )
  }

}

export default Board