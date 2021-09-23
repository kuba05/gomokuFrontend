# Structure:
* /components — contains all components, that can't work on their own (e.g. board), helpers and other classes (e.g. Player)

* /containers — contains all React Components, that are independent in their nature (there still can be used inside other containers)

# key files:
* /components/board.js — the game itself. Displays move and takes commands from players to play moves.
* /components/player.js — player controled by local user. All players shall inherit from her.


# TODO:
(FIXMEs and TODOs in files are not included)
* move helpers and classes to their own file (from /components)
