import React from "react"
import {Button} from "react-bootstrap"

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
        <Button onClick={this.handleClick}>Build House</Button>
      </div>
    )
  }

}

export default Build