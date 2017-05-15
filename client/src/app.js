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
  value: null,
  rentIndex: 0,
  rentValues: [null,null,null,null,null,null]
  // rent: null
}

const property2 ={
  name: "Old Kent Road",
  owner: null,
  group: "brown",
  value: 60,
  rentIndex: 0,
  rentValues: [2,10,30,90,160,250]
  // rent: rentValues[rentIndex]
}

const property3 ={
  name: "Community Chest",
  owner: null,
  group: "bonus",
  value: null,
  rentIndex: 0,
  rentValues: [null,null,null,null,null,null]
  // rent: null
}

const property4 ={
  name: "Whitechapel Road",
  owner: null,
  group: "brown",
  value: 60,
  rentIndex: 0,
  rentValues: [4,20,60,180,320,450]
  // rent: rentValues[rentIndex]
}

const property5 ={
  name: "Income Tax",
  owner: null,
  group: "tax",
  value: null,
  rentIndex: 0,
  rentValues: [200,200,200,200,200,200]
  // rent: 200
}

const property6 ={
  name: "Kings Cross Station",
  owner: null,
  group: "station",
  value: 200,
  rentIndex: 0,
  rentValues: [25,50,100,200,200,200]
  // rent: rentValues[rentIndex]
}

const property7 ={
  name: "The Angel, Islington",
  owner: null,
  group: "sky_blue",
  value: 100,
  rentIndex: 0,
  rentValues: [6,30,90,270,400,550]
  // rent: rentValues[rentIndex]
}

const property8 ={
  name: "Chance",
  owner: null,
  group: "bonus",
  value: null,
  rentIndex: 0,
  rentValues: [null,null,null,null,null,null]
  // rent: null
}

const property9 ={
  name: "Euston Road",
  owner: null,
  group: "sky_blue",
  value: 100,  rentIndex: 0,
  rentValues: [6,30,90,270,400,550]
  // rent: rentValues[rentIndex]
}

const property10 ={
  name: "Pentonville Road",
  owner: null,
  group: "sky_blue",
  value: 120,  rentIndex: 0,
  rentValues: [8,40,100,300,450,600]
  // rent: rentValues[rentIndex]
}

const property11 ={
  name: "Jail",
  owner: null,
  group: "corner",
  value: null,  rentIndex: 0,
  rentValues: [null,null,null,null,null,null]
  // rent: null
}

const property12 ={
  name: "Pall Mall",
  owner: null,
  group: "pink",
  value: 140,  rentIndex: 0,
  rentValues: [10,50,150,450,625,750]
  // rent: rentValues[rentIndex]
}

const property13 ={
  name: "Electric Company",
  owner: null,
  group: "utility",
  value: 150,  rentIndex: 0,
  rentValues: [null,null,null,null,null,null]
  // rent: rentValues[rentIndex]
}

const property14 ={
  name: "Whitehall",
  owner: null,
  group: "pink",
  value: 140,  rentIndex: 0,
  rentValues: [10,50,150,450,625,750]
  // rent: rentValues[rentIndex]
}

const property15 ={
  name: "Northumberland Avenue",
  owner: null,
  group: "pink",
  value: 160,  rentIndex: 0,
  rentValues: [12,60,180,500,700,900]
  // rent: rentValues[rentIndex]
}

const property16 ={
  name: "Marylebone Station",
  owner: null,
  group: "station",
  value: 200,  rentIndex: 0,
  rentValues: [25,50,100,200,200,200]
  // rent: rentValues[rentIndex]
}

const property17 ={
  name: "Bow Street",
  owner: null,
  group: "orange",
  value: 180,  rentIndex: 0,
  rentValues: [14,70,200,550,750,950]
  // rent: rentValues[rentIndex]
}

const property18 ={
  name: "Community Chest",
  owner: null,
  group: "bonus",
  value: null,  rentIndex: 0,
  rentValues: [null,null,null,null,null,null]
  // rent: null
}

const property19 ={
  name: "Marlborough Street",
  owner: null,
  group: "orange",
  value: 180,  rentIndex: 0,
  rentValues: [14,70,200,550,750,950]
  // rent: rentValues[rentIndex]
}

const property20 ={
  name: "Vine Street",
  owner: null,
  group: "orange",
  value: 200,  rentIndex: 0,
  rentValues: [16,80,220,600,800,1000]
  // rent: rentValues[rentIndex]
}

const property21 ={
  name: "Free Parking",
  owner: null,
  group: "corner",
  value: null,  rentIndex: 0,
  rentValues: [null,null,null,null,null,null]
  // rent: null
}

const property22 ={
  name: "Strand",
  owner: null,
  group: "red",
  value: 220,  rentIndex: 0,
  rentValues: [18,90,250,700,875,1050]
  // rent: rentValues[rentIndex]
}

const property23 ={
  name: "Chance",
  owner: null,
  group: "bonus",
  value: null,
  rentIndex: 0,
  rentValues: [null,null,null,null,null,null]
  // rent: null
}

const property24 ={
  name: "Fleet Street",
  owner: null,
  group: "red",
  value: 220,
  rentIndex: 0,
  rentValues: [18,90,250,700,875,1050]
  // rent: rentValues[rentIndex]
}

const property25 ={
  name: "Trafalgar Square",
  owner: null,
  group: "red",
  value: 240,
  rentIndex: 0,
  rentValues: [20,100,300,750,925,1100]
  // rent: rentValues[rentIndex]
}

const property26 ={
  name: "Fenchurch St Station",
  owner: null,
  group: "station",
  value: 200,
  rentIndex: 0,
  rentValues: [25,50,100,200,200,200]
  // rent: rentValues[rentIndex]
}

const property27 ={
  name: "Leicester Square",
  owner: null,
  group: "yellow",
  value: 260,
  rentIndex: 0,
  rentValues: [22,110,330,800,975,1150]
  // rent: rentValues[rentIndex]
}

const property28 ={
  name: "Coventry Street",
  owner: null,
  group: "yellow",
  value: 260,
  rentIndex: 0,
  rentValues: [22,110,330,800,975,1150]
  // rent: rentValues[rentIndex]
}

const property29 ={
  name: "Water Works",
  owner: null,
  group: "utility",
  value: 150,
  rentIndex: 0,
  rentValues: [null,null,null,null,null,null]
  // rent: rentValues[rentIndex]
}

const property30 ={
  name: "Picadilly",
  owner: null,
  group: "yellow",
  value: 280,
  rentIndex: 0,
  rentValues: [22,120,360,850,1025,1200]
  // rent: rentValues[rentIndex]
}

const property31 ={
  name: "Go To Jail",
  owner: null,
  group: "corner",
  value: null,
  rentIndex: 0,
  rentValues: [null,null,null,null,null,null]
  // rent: null
}

const property32 ={
  name: "Regent Street",
  owner: null,
  group: "green",
  value: 300,
  rentIndex: 0,
  rentValues: [26,130,390,900,1100,1275]
  // rent: rentValues[rentIndex]
}

const property33 ={
  name: "Oxford Street",
  owner: null,
  group: "green",
  value: 300,
  rentIndex: 0,
  rentValues: [26,130,390,900,1100,1275]
  // rent: rentValues[rentIndex]
}

const property34 ={
  name: "Community Chest",
  owner: null,
  group: "bonus",
  value: null,
  rentIndex: 0,
  rentValues: [null,null,null,null,null,null]
  // rent: null
}

const property35 ={
  name: "Bond Street",
  owner: null,
  group: "green",
  value: 320,
  rentIndex: 0,
  rentValues: [28,150,450,1000,1200,1400]
  // rent: rentValues[rentIndex]
}

const property36 ={
  name: "Liverpool St Station",
  owner: null,
  group: "station",
  value: null,
  rentIndex: 0,
  rentValues: [25,50,100,200,200,200]
  // rent: rentValues[rentIndex]
}

const property37 ={
  name: "Chance",
  owner: null,
  group: "bonus",
  value: null,
  rentIndex: 0,
  rentValues: [null,null,null,null,null,null]
  // rent: null
}

const property38 ={
  name: "Park Lane",
  owner: null,
  group: "dark_blue",
  value: 350,
  rentIndex: 0,
  rentValues: [35,175,500,1100,1300,1500]
  // rent: rentValues[rentIndex]
}

const property39 ={
  name: "Super Tax",
  owner: null,
  group: "tax",
  value: null,
  rentIndex: 0,
  rentValues: [100,100,100,100,100,100]
  // rent: 100
}

const property40 ={
  name: "Mayfair",
  owner: null,
  group: "dark_blue",
  value: 400,
  rentIndex: 0,
  rentValues: [50,200,600,1400,1700,2000]
  // rent: rentValues[rentIndex]
}

const properties = [property1,property2,property3,property4,property5,property6,property7,property8,property9,property10,property11,property12,property13,property14,property15,property16,property17,property18,property19,property20,property21,property22,property23,property24,property25,property26,property27,property28,property29,property30,property31,property32,property33,property34,property35,property36,property37,property38,property39,property40]


window.onload = function(){
  ReactDOM.render(
    <GameContainer players={players} properties={properties}/>,
    document.getElementById('app')
  );
}
