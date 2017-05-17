import React from "react"

class Escape extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.handleClick()
  }

  render(){
    return(
      <div className="leave-jail-div">
        <button onClick={this.handleClick}>Use GOOJF Card</button>
      </div>
    )
  }

}

export default Escape