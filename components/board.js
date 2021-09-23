import React from 'react';
import { Player } from './player.js';
import helper from './helper.js';
import { Field } from './field.js';

export class Board extends React.Component {
  /**
  * PGN: string - is our implementation of PGN
  * players: [0: Player, 1: Player]
  * 
  * TODO:
  * allowSubvariants: boolean
  **/
  constructor (props) {
    super(props);
    
    if (props.PGN === undefined || props.players === undefined) {
      console.log("ilegal props");
      throw ValueError();
    }
      
    let unpacked = helper.parsePGN (props.PGN);
    
    this.state = {
      boardState: helper.parseFEN(unpacked["FEN"]),
      playerOnMove: unpacked["PlayerOnMove"]
    };
  }
  
  /**
   * onMount start first player's turn
   **/
  componentDidMount () {
    this.props.players[this.state.playerOnMove].startTurn(this.makeMove,this.state.boardState);
  }
  
  /**
   * this is an array function since it needs to be bind
   * 
   * move: {x: number, y: number}
  **/
  makeMove =  (move) => {
    //current player's turn ends
    this.props.players[this.state.playerOnMove].endTurn();
    
    //make the move
    this.setState(
      (oldState) => {
        let newState = {...oldState};
        
        newState.boardState[move.y][move.x] = oldState.playerOnMove;
        
        //change playerOnMove
        newState.playerOnMove = (newState.playerOnMove+1)%2;
        
        //new player's turn starts
        this.props.players[newState.playerOnMove].startTurn(this.makeMove, newState.boardState);
        
        return newState;
      }
    );
  }
  
  /**
   * called whenever any tile is clicked
   * used in order to sent this event to players
   * 
   * x: number
   * y: number
   * value: number | null
  **/
  tileClicked (x, y, value) {
    console.log(this.props.players)
    console.log("clicked ", x,y);
    //sent the event to all players
    //TODO: should be done with events
    this.props.players.forEach(player => player.tileClicked({x,y, value}));
  }
  
  render () {
    let lines = this.state.boardState.map(
      (line, idy) =>
        <tr key={idy}>
          { line.map(
              (field, idx) => <Field
                key = {idx}
                onClick = {
                  () => this.tileClicked(idx, idy, field)
                }
                value = {field}
              />
            )
          }
        </tr>
      );
      
    return <table><tbody>{lines}</tbody></table>;
  }
}