# Monopoly
A web-app version of the board game Monopoly, built using React. This is an ongoing project, although most of the rules of Monopoly are in place and working! Still to be added are:

  - Mortgaging
  - Effects of rolling doubles
  - Support for more players
  
Also still to add are various bits of styling to make it actually look like a Monopoly board. I am open to/begging for suggestions on how to make that happen!

### Setup

In the terminal, navigate to the top level of this repository. From there start the web server using

  *npm start*
  
Open a second terminal tab, navigate to the client folder and bundle the files using webpack by typing *npm start* again. Open a web browser and navigate to localhost:3000, where you should see a game board.

### Playing the game

Start the game by clicking the button at the top of the screen. Each player takes their turn by clicking the "roll dice" button, which automatically moves them on the board. The player can then take other actions such as buying property and adding houses before ending their turn with the "end turn" button. Effects of interacting with the board, eg. drawing a Chance card, are shown using pop-ups. If a player is in jail they must still roll and end their turn, although there will be no change to their position on the board until their time in jail is up.
