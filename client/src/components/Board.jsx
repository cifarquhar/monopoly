import React from "react"
import Square from "./Square"
import FullRow from "./FullRow"
import {Grid, Row, Col} from "react-bootstrap"

class Board extends React.Component{

  constructor(props){
    super(props)
    this.state = {
     
    }
  }

  getPlayerPositions(){
   return this.props.players.map(function(player){
    return player.position
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

  // return(
  //   <div className="board">
  //   {squareNodes}
  //   </div>
  //   )

  return(
    <Grid>
      <Row>
        <Col md={1}>{squareNodes[0]}</Col>
        <Col md={1}>{squareNodes[1]}</Col>
        <Col md={1}>{squareNodes[2]}</Col>
        <Col md={1}>{squareNodes[3]}</Col>
        <Col md={1}>{squareNodes[4]}</Col>
        <Col md={1}>{squareNodes[5]}</Col>
        <Col md={1}>{squareNodes[6]}</Col>
        <Col md={1}>{squareNodes[7]}</Col>
        <Col md={1}>{squareNodes[8]}</Col>
        <Col md={1}>{squareNodes[9]}</Col> 
        <Col md={1}>{squareNodes[10]}</Col>
      </Row>
      <Row>
        <Col md={1}>{squareNodes[39]}</Col>
        <Col md={1} mdOffset={9}>{squareNodes[11]}</Col>
      </Row>      
      <Row>
        <Col md={1}>{squareNodes[38]}</Col>
        <Col md={1} mdOffset={9}>{squareNodes[12]}</Col>
      </Row>      
      <Row>
        <Col md={1}>{squareNodes[37]}</Col>
        <Col md={1} mdOffset={9}>{squareNodes[13]}</Col>
      </Row>      
      <Row>
        <Col md={1}>{squareNodes[36]}</Col>
        <Col md={1} mdOffset={9}>{squareNodes[14]}</Col>
      </Row>      
      <Row>
        <Col md={1}>{squareNodes[35]}</Col>
        <Col md={1} mdOffset={9}>{squareNodes[15]}</Col>
      </Row>      
      <Row>
        <Col md={1}>{squareNodes[34]}</Col>
        <Col md={1} mdOffset={9}>{squareNodes[16]}</Col>
      </Row>      
      <Row>
        <Col md={1}>{squareNodes[33]}</Col>
        <Col md={1} mdOffset={9}>{squareNodes[17]}</Col>
      </Row>      
      <Row>
        <Col md={1}>{squareNodes[32]}</Col>
        <Col md={1} mdOffset={9}>{squareNodes[18]}</Col>
      </Row>      
      <Row>
        <Col md={1}>{squareNodes[31]}</Col>
        <Col md={1} mdOffset={9}>{squareNodes[19]}</Col>
      </Row>
      <Row>
        <Col md={1}>{squareNodes[20]}</Col>
        <Col md={1}>{squareNodes[21]}</Col>
        <Col md={1}>{squareNodes[22]}</Col>
        <Col md={1}>{squareNodes[23]}</Col>
        <Col md={1}>{squareNodes[24]}</Col>
        <Col md={1}>{squareNodes[25]}</Col>
        <Col md={1}>{squareNodes[26]}</Col>
        <Col md={1}>{squareNodes[27]}</Col>
        <Col md={1}>{squareNodes[28]}</Col>
        <Col md={1}>{squareNodes[29]}</Col>
        <Col md={1}>{squareNodes[30]}</Col>
      </Row>
    </Grid>
  )
}

}

export default Board