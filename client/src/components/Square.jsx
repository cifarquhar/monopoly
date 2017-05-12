import React from "react"

class Square extends React.Component{

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="box">
        <p>{this.props.value.name}</p>
        <p>{this.props.players ? this.props.players.map((player) => {
                                                        return player.state.name
                                                        }).toString() : null}</p>
      </div>
    )
  }

}

export default Square