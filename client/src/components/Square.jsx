import React from "react"

class Square extends React.Component{

  constructor(props){
    super(props)
    this.getClassName = this.getClassName.bind(this)
  }

  getClassName(index){
    if ([0,10,20,30].includes(index)) {
      return "box corner"
    }
    else if ([1,2,3,4,5,6,7,8,9,21,22,23,24,25,26,27,28,29].includes(index)) {
      return "box top"
    }
    else {
      return "box side"
    }
  }

  render(){
    return(
      <div className={this.getClassName(this.props.index)}>
        <p>{this.props.value.name}</p>
        <p>{this.props.players ? this.props.players.map((player) => {
                                                        return player.name
                                                        }).toString() : null}</p>
      </div>
    )
  }

}

export default Square