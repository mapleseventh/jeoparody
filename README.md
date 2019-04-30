# Jeoparody
By House Martell

## Trivia Game that you can play on your phone (kinda)

Game state is held in the server in a single JS object called game state. This keeps track of all active players, their point count, and if they have buzzed in.

Currently clients have to be on the same wifi network and the host server IP is explicitly listed in the package.json under the devHome script.

All actions that change game/user state must pass through the /api/ layer on the server.  Most of the client side logic for that is in the actions.js file.

All display of the server state is obtained by copying the server game state over to the react state every 300ms in a setInterval loop that only runs on the game board version.

Tricky bit of this will probably be how the mainContainer actually renders two possible views, both vastly different from each other.


## TODO's

Biggest suggestions would be:

* Move client/host logic in to seperate containers
* Better game flow. Current have to manually add points/clear buzzers
    * Add in ability to correct answers that are right but miss by a typo
* Limit # of possible clients (keep all on screen)
* Better CSS / presentation
* Feed back on phone/buzzer client when they "Win" the buzz-off.
* Implmennt game history feature (DB is prepped for single player version, won't be much to modify the multi player)
* better answer matching - look into fuzzy matching

