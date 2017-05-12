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
        <p>{this.props.value}</p>
        <p>{this.props.player ? this.props.player.state.name : ""}</p>
      </div>
    )
  }

}

export default Square