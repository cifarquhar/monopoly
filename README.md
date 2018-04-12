# Monopoly
A web-app version of the board game Monopoly, built using React. This is an ongoing project, although most of the rules of Monopoly are in place and working! Still to be added are:

  - Mortgaging
  - Assorted bug fixes
  
Updates to the styling of this project are ongoing. It now resembles the familiar Monopoly board much more closely, with React Bootstrap used to style the buttons and property maintenance placed in a modal. CSS is now handled using Sass. The *master* branch has the latest updates included, anything on the *develop* branch is still in-progress and may not be stable. 

### Setup

Give the start script permission to run using 

*chmod 755 start.sh*

Execute the script and navigate to the browser window it opens. You may have to refresh the page, depending on how quickly the server starts.

### Playing the game

Start the game by clicking the button at the top of the screen. Each player takes their turn by clicking the "roll dice" button, which automatically moves them on the board. The player can then take other actions such as buying property and adding houses before ending their turn with the "end turn" button. Effects of interacting with the board, eg. drawing a Chance card, are shown using pop-ups. If a player is in jail they must still roll and end their turn, although there will be no change to their position on the board until their time in jail is up.
