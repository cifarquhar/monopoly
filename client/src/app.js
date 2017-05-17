import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from "./containers/GameContainer"
import Player from "./models/Player"
import Card from "./models/Card"

const player1 = new Player("P1")
const player2 = new Player("P2")

const players = [player1,player2]

const property1 ={
  name: "Go",
  owner: null,
  group: "corner",
  value: null,
  rentIndex: 0,
  rentValues: [null],
  housePrice: null
  // rent: null
}

const property2 ={
  name: "Old Kent Road",
  owner: null,
  group: "brown",
  value: 60,
  rentIndex: 0,
  rentValues: [2,4,10,30,90,160,250],
  housePrice: 50
  // rent: rentValues[rentIndex]
}

const property3 ={
  name: "Community Chest",
  owner: null,
  group: "bonus",
  value: null,
  rentIndex: 0,
  rentValues: [null],
  housePrice: null
  // rent: null
}

const property4 ={
  name: "Whitechapel Road",
  owner: null,
  group: "brown",
  value: 60,
  rentIndex: 0,
  rentValues: [4,8,20,60,180,320,450],
  housePrice: 50
  // rent: rentValues[rentIndex]
}

const property5 ={
  name: "Income Tax",
  owner: null,
  group: "tax",
  value: null,
  rentIndex: 0,
  rentValues: [200],
  housePrice: null
  // rent: 200
}

const property6 ={
  name: "Kings Cross Station",
  owner: null,
  group: "station",
  value: 200,
  rentIndex: 0,
  rentValues: [25,50,100,200],
  housePrice: null
  // rent: rentValues[rentIndex]
}

const property7 ={
  name: "The Angel, Islington",
  owner: null,
  group: "sky_blue",
  value: 100,
  rentIndex: 0,
  rentValues: [6,12,30,90,270,400,550],
  housePrice: 50
  // rent: rentValues[rentIndex]
}

const property8 ={
  name: "Chance",
  owner: null,
  group: "bonus",
  value: null,
  rentIndex: 0,
  rentValues: [null],
  housePrice: null
  // rent: null
}

const property9 ={
  name: "Euston Road",
  owner: null,
  group: "sky_blue",
  value: 100,  
  rentIndex: 0,
  rentValues: [6,12,30,90,270,400,550],
  housePrice: 50
  // rent: rentValues[rentIndex]
}

const property10 ={
  name: "Pentonville Road",
  owner: null,
  group: "sky_blue",
  value: 120,  
  rentIndex: 0,
  rentValues: [8,16,40,100,300,450,600],
  housePrice: 50
  // rent: rentValues[rentIndex]
}

const property11 ={
  name: "Jail",
  owner: null,
  group: "corner",
  value: null,  
  rentIndex: 0,
  rentValues: [null],
  housePrice: null
  // rent: null
}

const property12 ={
  name: "Pall Mall",
  owner: null,
  group: "pink",
  value: 140,  
  rentIndex: 0,
  rentValues: [10,20,50,150,450,625,750],
  housePrice: 100
  // rent: rentValues[rentIndex]
}

const property13 ={
  name: "Electric Company",
  owner: null,
  group: "utility",
  value: 150,  
  rentIndex: 0,
  rentValues: [0,4,10],
  housePrice: null
  // rent: rentValues[rentIndex]
}

const property14 ={
  name: "Whitehall",
  owner: null,
  group: "pink",
  value: 140,  
  rentIndex: 0,
  rentValues: [10,20,50,150,450,625,750],
  housePrice: 100
  // rent: rentValues[rentIndex]
}

const property15 ={
  name: "Northumberland Avenue",
  owner: null,
  group: "pink",
  value: 160,  
  rentIndex: 0,
  rentValues: [12,24,60,180,500,700,900],
  housePrice: 100
  // rent: rentValues[rentIndex]
}

const property16 ={
  name: "Marylebone Station",
  owner: null,
  group: "station",
  value: 200,  
  rentIndex: 0,
  rentValues: [25,50,100,200],
  housePrice: null
  // rent: rentValues[rentIndex]
}

const property17 ={
  name: "Bow Street",
  owner: null,
  group: "orange",
  value: 180,  
  rentIndex: 0,
  rentValues: [14,28,70,200,550,750,950],
  housePrice: 100
  // rent: rentValues[rentIndex]
}

const property18 ={
  name: "Community Chest",
  owner: null,
  group: "bonus",
  value: null,  
  rentIndex: 0,
  rentValues: [null],
  housePrice: null
  // rent: null
}

const property19 ={
  name: "Marlborough Street",
  owner: null,
  group: "orange",
  value: 180,  
  rentIndex: 0,
  rentValues: [14,28,70,200,550,750,950],
  housePrice: 100
  // rent: rentValues[rentIndex]
}

const property20 ={
  name: "Vine Street",
  owner: null,
  group: "orange",
  value: 200,  
  rentIndex: 0,
  rentValues: [16,32,80,220,600,800,1000],
  housePrice: 100
  // rent: rentValues[rentIndex]
}

const property21 ={
  name: "Free Parking",
  owner: null,
  group: "corner",
  value: null,  
  rentIndex: 0,
  rentValues: [null],
  housePrice: null
  // rent: null
}

const property22 ={
  name: "Strand",
  owner: null,
  group: "red",
  value: 220,  
  rentIndex: 0,
  rentValues: [18,36,90,250,700,875,1050],
  housePrice: 150
  // rent: rentValues[rentIndex]
}

const property23 ={
  name: "Chance",
  owner: null,
  group: "bonus",
  value: null,
  rentIndex: 0,
  rentValues: [null],
  housePrice: null
  // rent: null
}

const property24 ={
  name: "Fleet Street",
  owner: null,
  group: "red",
  value: 220,
  rentIndex: 0,
  rentValues: [18,36,90,250,700,875,1050],
  housePrice: 150
  // rent: rentValues[rentIndex]
}

const property25 ={
  name: "Trafalgar Square",
  owner: null,
  group: "red",
  value: 240,
  rentIndex: 0,
  rentValues: [20,40,100,300,750,925,1100],
  housePrice: 150
  // rent: rentValues[rentIndex]
}

const property26 ={
  name: "Fenchurch St Station",
  owner: null,
  group: "station",
  value: 200,
  rentIndex: 0,
  rentValues: [25,50,100,200],
  housePrice: null
  // rent: rentValues[rentIndex]
}

const property27 ={
  name: "Leicester Square",
  owner: null,
  group: "yellow",
  value: 260,
  rentIndex: 0,
  rentValues: [22,44,110,330,800,975,1150],
  housePrice: 150
  // rent: rentValues[rentIndex]
}

const property28 ={
  name: "Coventry Street",
  owner: null,
  group: "yellow",
  value: 260,
  rentIndex: 0,
  rentValues: [22,44,110,330,800,975,1150],
  housePrice: 150
  // rent: rentValues[rentIndex]
}

const property29 ={
  name: "Water Works",
  owner: null,
  group: "utility",
  value: 150,
  rentIndex: 0,
  rentValues: [0,4,10],
  housePrice: null
  // rent: rentValues[rentIndex]
}

const property30 ={
  name: "Picadilly",
  owner: null,
  group: "yellow",
  value: 280,
  rentIndex: 0,
  rentValues: [22,44,120,360,850,1025,1200],
  housePrice: 150
  // rent: rentValues[rentIndex]
}

const property31 ={
  name: "Go To Jail",
  owner: null,
  group: "corner",
  value: null,
  rentIndex: 0,
  rentValues: [null],
  housePrice: null
  // rent: null
}

const property32 ={
  name: "Regent Street",
  owner: null,
  group: "green",
  value: 300,
  rentIndex: 0,
  rentValues: [26,52,130,390,900,1100,1275],
  housePrice: 200
  // rent: rentValues[rentIndex]
}

const property33 ={
  name: "Oxford Street",
  owner: null,
  group: "green",
  value: 300,
  rentIndex: 0,
  rentValues: [26,52,130,390,900,1100,1275],
  housePrice: 200
  // rent: rentValues[rentIndex]
}

const property34 ={
  name: "Community Chest",
  owner: null,
  group: "bonus",
  value: null,
  rentIndex: 0,
  rentValues: [null],
  housePrice: null
  // rent: null
}

const property35 ={
  name: "Bond Street",
  owner: null,
  group: "green",
  value: 320,
  rentIndex: 0,
  rentValues: [28,56,150,450,1000,1200,1400],
  housePrice: 200
  // rent: rentValues[rentIndex]
}

const property36 ={
  name: "Liverpool St Station",
  owner: null,
  group: "station",
  value: 200,
  rentIndex: 0,
  rentValues: [25,50,100,200],
  housePrice: null
  // rent: rentValues[rentIndex]
}

const property37 ={
  name: "Chance",
  owner: null,
  group: "bonus",
  value: null,
  rentIndex: 0,
  rentValues: [null],
  housePrice: null
  // rent: null
}

const property38 ={
  name: "Park Lane",
  owner: null,
  group: "dark_blue",
  value: 350,
  rentIndex: 0,
  rentValues: [35,70,175,500,1100,1300,1500],
  housePrice: 200
  // rent: rentValues[rentIndex]
}

const property39 ={
  name: "Super Tax",
  owner: null,
  group: "tax",
  value: null,
  rentIndex: 0,
  rentValues: [100],
  housePrice: null
  // rent: 100
}

const property40 ={
  name: "Mayfair",
  owner: null,
  group: "dark_blue",
  value: 400,
  rentIndex: 0,
  rentValues: [50,100,200,600,1400,1700,2000],
  housePrice: 200
  // rent: rentValues[rentIndex]
}

const properties = [property1,property2,property3,property4,property5,property6,property7,property8,property9,property10,property11,property12,property13,property14,property15,property16,property17,property18,property19,property20,property21,property22,property23,property24,property25,property26,property27,property28,property29,property30,property31,property32,property33,property34,property35,property36,property37,property38,property39,property40]



  const chance1 = new Card("Advance to Mayfair",1,39)
  const chance2 = new Card("Advance to Go",1,0)
  const chance3 = new Card("Bank pays you dividend of £50",2,50)
  const chance4 = new Card("Pay school fees of £150",3,150)
  const chance5 = new Card("Speeding fine £15",3,15)
  const chance6 = new Card("You have won a crossword competition, collect £100",2,100)
  const chance7 = new Card("Your building loan matures, collect £150",2,150)
  const chance8 = new Card("Get out of Jail free",4)
  const chance9 = new Card("Advance to Trafalgar Square",1,24)
  const chance10 = new Card("Take a trip to Marylebone Station",1,15)
  const chance11 = new Card("Advance to Pall Mall",1,11)
  const chance12 = new Card("Drunk in charge, fine £20",3,20)
  const chance13 = new Card("Go to Jail",1,39)
  const chance14 = new Card("Go back 3 spaces",1,39)
  const chance15 = new Card("You are assessed for street repairs: £40 per house, £115 per hotel",3)
  const chance16 = new Card("Make general repairs on all of your houses. For each house pay £25, for each hotel pay £100",3)

  const chanceCards = [chance1,chance2,chance3,chance4,chance5,chance6,chance7,chance8,chance9,chance10,chance11,chance12,chance13,chance14,chance15,chance16]



  const chest1 = new Card("Income tax refund, collect £20",2,20)
  const chest2 = new Card("From Sale of Stock you get £50",2,50)
  const chest3 = new Card("Receive interest on 7% preference shares, £25",2,25)
  const chest4 = new Card("Get out of Jail free",4)
  const chest5 = new Card("Advance to Go",1,0)
  const chest6 = new Card("Pay hospital £100",3,100)
  const chest7 = new Card("You have won second prize in a beauty contest, collect £10",2,10)
  const chest8 = new Card("Bank error in your favour, collect £200",2,200)
  const chest9 = new Card("You inherit £100",2,100)
  const chest10 = new Card("Pay you insurance premium £50",3,50)
  const chest11 = new Card("Doctor's fee pay £50",3,50)
  const chest12 = new Card("Annuity matures, collect £100",2,100)
  const chest13 = new Card("Go to Jail",1,39)
  const chest14 = new Card("Go back to Old Kent Road",1,1)
  const chest15 = new Card("It is your birthday, collect £10 from each player")
  const chest16 = new Card("Pay a £10 fine (OK) or take a Chance (cancel)")

  const chestCards = [chest1,chest2,chest3,chest4,chest5,chest6,chest7,chest8,chest9,chest10,chest11,chest12,chest13,chest14,chest15,chest16]

window.onload = function(){
  ReactDOM.render(
    <GameContainer players={players} properties={properties} chance={chanceCards} chest = {chestCards}/>,
    document.getElementById('app')
  );
}
