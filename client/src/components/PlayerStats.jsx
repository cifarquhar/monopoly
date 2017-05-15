import React from "react"

class PlayerStats extends React.Component{

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){

    let name = ""

    let funds = ""

  if (this.props.player){
    name = this.props.player.state.name

    funds = this.props.player.state.money
}
    return(
      <div className="player-stats-div">
        <h4>Current Player: {name}</h4>
        <h4>Money: {funds}</h4>
      </div>
    )
  }

}

export default PlayerStats