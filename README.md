# Monopoly
A web-app version of the board game Monopoly, built using React. This is an ongoing project, although most of the rules of Monopoly are in place and working! Still to be added are:

  - Mortgaging
  - Support for more players
  
There are two branches to this project. The *master* branch has a working version of the game (minus the parts listed above) but with very basic styling. I am working on improving the styling using the React Bootstrap, and ongoing work on this is on the *bootstrap* branch. The game logic is the same, but the board on this branch looks more like the familiar Monopoly board. Buttons have been moved inside the board, and property maintenance functions have been placed in a modal. Note that this is work in progress, and will eventually look a lot better!

### Setup

Give the start script permission to run using 

*chmod 755 stat.sh*

Execute the script and navigate to the browser window it opens. You may have to refresh the page, depending on how quickly the server starts.

### Playing the game

Start the game by clicking the button at the top of the screen. Each player takes their turn by clicking the "roll dice" button, which automatically moves them on the board. The player can then take other actions such as buying property and adding houses before ending their turn with the "end turn" button. Effects of interacting with the board, eg. drawing a Chance card, are shown using pop-ups. If a player is in jail they must still roll and end their turn, although there will be no change to their position on the board until their time in jail is up.
