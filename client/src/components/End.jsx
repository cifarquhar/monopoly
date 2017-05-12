import React from "react"

class End extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {

    }
  }

  handleClick(){
    this.props.updateActivePlayer()
  }

  render(){
    return(
      <div className="end-div">
        <button onClick={this.handleClick}>End Turn</button>
      </div>
    )
  }

}

export default End