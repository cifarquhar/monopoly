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
      </div>
    )
  }

}

export default Square