import React from "react"
import Square from "./Square"

class Board extends React.Component{

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){

    const squareNodes = this.props.squares.map((array, index)=>{
      return(
        <Square 
        key = {index} 
        value={this.props.squares[index]}
        id =  {"cell" + this.props.squares[index]}
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