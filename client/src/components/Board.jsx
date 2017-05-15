import React from "react"
import Square from "./Square"

class Board extends React.Component{

  constructor(props){
    super(props)
    this.state = {
     
    }
  }

  getPlayerPositions(){
   return this.props.players.map(function(player){
    return player.state.position
  })
 }

 filterPositions(playerPositions,index) {return this.props.players.filter((player,filterIndex)=>{
  return this.props.players.indexOf(player) === playerPositions.map((position,positionIndex) => {
    return positionIndex === filterIndex ? position : null
  }).indexOf(index)
})}

 render(){


  const squareNodes = this.props.squares.map((array, index)=>{


    const playerPositions = this.getPlayerPositions()

    const playersArray = playerPositions.includes(index) ? this.filterPositions(playerPositions,index) : null

    return(
      <Square 
      key = {index} 
      value={this.props.squares[index]}
      id =  {"cell" + this.props.squares[index]}
      players={playersArray}
      />
      )
  })

  return(
    <div className="board">
    {squareNodes}
    </div>
    )
}

}

export default Board