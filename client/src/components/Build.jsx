import React from "react"

class Build extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {

    }
  }

  handleClick(){
    this.props.player.developProperty(this.props.property)
  }


  render(){
    return(
      <div className="build-button-div">
        <button onClick={this.handleClick}>Build House</button>
      </div>
    )
  }

}

export default Build