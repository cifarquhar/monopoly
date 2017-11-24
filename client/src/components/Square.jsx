import React from "react"

class Square extends React.Component{

  constructor(props){
    super(props)
    this.getClassName = this.getClassName.bind(this)
  }

  getClassName(index){
    if ([0,10,20,30].includes(index)) {
      return "corner"
    }
    else if ([1,2,3,4,5,6,7,8,9].includes(index)) {
      return "top"
    }
    else if ([21,22,23,24,25,26,27,28,29].includes(index)) {
      return "bottom"
    }
    else if ([11,12,13,14,15,16,17,18,19].includes(index)) {
      return "right"
    }
    else if ([31,32,33,34,35,36,37,38,39].includes(index)) {
      return "left"
    }
  }

  render(){
    const boardSide = this.getClassName(this.props.index)

    return(
      <div className={"box " + boardSide}>
        <div className={"groupDiv " + boardSide} style={{backgroundColor: "red"}} />
        <div>
          <p>{this.props.value.name}</p>
          <p>{this.props.players ? this.props.players.map((player) => {
              return player.name
                }).toString() : null}</p>
        </div>
      </div>
      )
  }

}

export default Square