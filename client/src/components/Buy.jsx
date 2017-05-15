import React from "react"

class Buy extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {

    }
  }

  handleClick(){
    this.props.handleClick()
  }

  render(){
    return(
      <div className="buy-button-div">
        <button onClick={this.handleClick}>Buy Property</button>
      </div>
    )
  }

}

export default Buy