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
    else if ([1,2,3,4,5,6,7,8,9].includes(index)){
      return "top"
    }
    else if ([21,22,23,24,25,26,27,28,29].includes(index)){
      return "bottom"
    }
    else if ([11,12,13,14,15,16,17,18,19].includes(index)){
      return "right"
    }
    else if ([31,32,33,34,35,36,37,38,39].includes(index)){
      return "left"
    }
    else {
      return ""
    }
  }

  render(){
    const p = this.props

    const boardSide = this.getClassName(p.index)

    const pieces = p.players ? p.players.map((player) => { return "../../public/images/" + player.piece + ".jpeg"}) : []

    const playerCount = p.players ? p.players.length : 0

    return(
      <div className={"box outer " + boardSide}>
        <div className={"groupDiv " + boardSide + " " + p.value.group} />
        <div className={"contentDiv " + boardSide}>
          <p><strong>{p.value.shortName}</strong></p>
          <img src={playerCount >= 1 ? require("../../public/images/" + p.players[0].piece + ".jpeg") : null } 
            alt={playerCount >= 1 ? p.players[0].name : null }
            style={{height: "30px"}}/>
          <img src={playerCount >= 2 ? require("../../public/images/" + p.players[1].piece + ".jpeg") : null}
            alt={playerCount >= 2 ? p.players[1] : null}
            style={{ height: "30px" }} />
          <img src={playerCount >= 3 ? require("../../public/images/" + p.players[2].piece + ".jpeg") : null}
            alt={playerCount >= 3 ? p.players[2] : null}
            style={{ height: "30px" }} />
          <img src={playerCount >= 4 ? require("../../public/images/" + p.players[3].piece + ".jpeg") : null}
            alt={playerCount >= 4 ? p.players[3] : null}
            style={{ height: "30px" }} />
          <img src={playerCount >= 5 ? require("../../public/images/" + p.players[4].piece + ".jpeg") : null}
            alt={playerCount >= 5 ? p.players[4] : null}
            style={{ height: "30px" }} />
          <img src={playerCount >= 6 ? require("../../public/images/" + p.players[5].piece + ".jpeg") : null}
            alt={playerCount >= 6 ? p.players[5] : null}
            style={{ height: "30px" }} />
        </div>
      </div>
      )
  }

}

export default Square