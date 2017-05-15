import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from "./containers/GameContainer"
import Player from "./components/Player"

const player1 = new Player("P1")
const player2 = new Player("P2")

const players = [player1,player2]

const property1 ={
  name: "Go",
  owner: null,
  group: "corner",
  value: null
}

const property2 ={
  name: "Old Kent Road",
  owner: null,
  group: "brown",
  value: 60
}

const property3 ={
  name: "Community Chest",
  owner: null,
  group: "bonus",
  value: null
}

const property4 ={
  name: "Whitechapel Road",
  owner: null,
  group: "brown",
  value: 60
}

const property5 ={
  name: "Income Tax",
  owner: null,
  group: "tax",
  value: null
}

const property6 ={
  name: "Kings Cross Station",
  owner: null,
  group: "station",
  value: 200
}

const property7 ={
  name: "The Angel, Islington",
  owner: null,
  group: "sky_blue",
  value: 100
}

const property8 ={
  name: "Chance",
  owner: null,
  group: "bonus",
  value: null
}

const property9 ={
  name: "Euston Road",
  owner: null,
  group: "sky_blue",
  value: 100
}

const property10 ={
  name: "Pentonville Road",
  owner: null,
  group: "sky_blue",
  value: 120
}

const property11 ={
  name: "Jail",
  owner: null,
  group: "corner",
  value: null
}

const property12 ={
  name: "Pall Mall",
  owner: null,
  group: "pink",
  value: 140
}

const property13 ={
  name: "Electric Company",
  owner: null,
  group: "utility",
  value: 150
}

const property14 ={
  name: "Whitehall",
  owner: null,
  group: "pink",
  value: 140
}

const property15 ={
  name: "Northumberland Avenue",
  owner: null,
  group: "pink",
  value: 160
}

const property16 ={
  name: "Marylebone Station",
  owner: null,
  group: "station",
  value: 200
}

const property17 ={
  name: "Bow Street",
  owner: null,
  group: "orange",
  value: 180
}

const property18 ={
  name: "Community Chest",
  owner: null,
  group: "bonus",
  value: null
}

const property19 ={
  name: "Marlborough Street",
  owner: null,
  group: "orange",
  value: 180
}

const property20 ={
  name: "Vine Street",
  owner: null,
  group: "orange",
  value: 200
}

const property21 ={
  name: "Free Parking",
  owner: null,
  group: "corner",
  value: null
}

const property22 ={
  name: "Strand",
  owner: null,
  group: "red",
  value: 220
}

const property23 ={
  name: "Chance",
  owner: null,
  group: "bonus",
  value: null
}

const property24 ={
  name: "Fleet Street",
  owner: null,
  group: "red",
  value: 220
}

const property25 ={
  name: "Trafalgar Square",
  owner: null,
  group: "red",
  value: 240
}

const property26 ={
  name: "Fenchurch St Station",
  owner: null,
  group: "station",
  value: 200
}

const property27 ={
  name: "Leicester Square",
  owner: null,
  group: "yellow",
  value: 260
}

const property28 ={
  name: "Coventry Street",
  owner: null,
  group: "yellow",
  value: 260
}

const property29 ={
  name: "Water Works",
  owner: null,
  group: "utility",
  value: 150
}

const property30 ={
  name: "Picadilly",
  owner: null,
  group: "yellow",
  value: 280
}

const property31 ={
  name: "Go To Jail",
  owner: null,
  group: "corner",
  value: null
}

const property32 ={
  name: "Regent Street",
  owner: null,
  group: "green",
  value: 300
}

const property33 ={
  name: "Oxford Street",
  owner: null,
  group: "green",
  value: 300
}

const property34 ={
  name: "Community Chest",
  owner: null,
  group: "bonus",
  value: null
}

const property35 ={
  name: "Bond Street",
  owner: null,
  group: "green",
  value: 320
}

const property36 ={
  name: "Liverpool St Station",
  owner: null,
  group: "station",
  value: null
}

const property37 ={
  name: "Chance",
  owner: null,
  group: "bonus",
  value: null
}

const property38 ={
  name: "Park Lane",
  owner: null,
  group: "dark_blue",
  value: 350
}

const property39 ={
  name: "Super Tax",
  owner: null,
  group: "tax",
  value: null
}

const property40 ={
  name: "Mayfair",
  owner: null,
  group: "dark_blue",
  value: 400
}

const properties = [property1,property2,property3,property4,property5,property6,property7,property8,property9,property10,property11,property12,property13,property14,property15,property16,property17,property18,property19,property20,property21,property22,property23,property24,property25,property26,property27,property28,property29,property30,property31,property32,property33,property34,property35,property36,property37,property38,property39,property40]


window.onload = function(){
  ReactDOM.render(
    <GameContainer players={players} properties={properties}/>,
    document.getElementById('app')
  );
}
