import React from "react"

class Square extends React.Component{

  constructor(props){
    super(props)
    this.getClassName = this.getClassName.bind(this)
  }

  getClassName(index, group){
    if ([0,10,20,30].includes(index)) {
      return "corner"
    }
    else if ([1,2,3,4,5,6,7,8,9].includes(index) && !["bonus", "tax", "station", "utility"].includes(group)) {
      return " top"
    }
    else if ([21,22,23,24,25,26,27,28,29].includes(index) && !["bonus", "tax", "station", "utility"].includes(group)) {
      return " bottom"
    }
    else if ([11,12,13,14,15,16,17,18,19].includes(index) && !["bonus", "tax", "station", "utility"].includes(group)) {
      return " right"
    }
    else if ([31,32,33,34,35,36,37,38,39].includes(index) && !["bonus", "tax", "station", "utility"].includes(group)) {
      return " left"
    }
    else {
      return ""
    }
  }

  getBackgroundColour(colour){
    switch (colour){
      case "brown":
        return "#8B4513"
        break
      case "sky_blue":
        return "#87CEEB"
        break
      case "pink":
        return "#FF69B4"
        break
      case "orange":
        return "#FFA500"
        break
      case "red":
        return "#FF0000"
        break
      case "yellow":
        return "#FFFF00"
        break
      case "green":
        return "#008000"
        break
      case "dark_blue":
        return "#0000FF"
        break
      default:
        return "#FFFFFF"
    }
  }

  render(){
    const p = this.props

    const boardSide = this.getClassName(p.index)
    const markerSide = this.getClassName(p.index, p.value.group)

    const backgroundColor = this.getBackgroundColour(p.value.group)

    return(
      <div className={"box " + boardSide}>
        <div className={"groupDiv" + markerSide} style={{backgroundColor}} />
        <div>
          <p><strong>{p.value.name}</strong></p>
          <p>{p.players ? p.players.map((player) => {
              return player.name
                }).toString() : null}</p>
        </div>
      </div>
      )
  }

}

export default Square