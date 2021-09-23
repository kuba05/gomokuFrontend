import React from 'react';

import { Board, DisplayPlayer } from '../components/index.js';

export class Duel extends React.Component {
  
  /**
   * props: {
   *   players: Player[];
   *   PGN: string
  **/
  constructor (props) {
    super(props);
    
    if (props.players === undefined || props.PGN === undefined) {
      console.log("bad props for Duel");
      throw null;
    }
  }
  
  render () {
    return <div className="container">
      <div className="row">
        <div className="col-auto">
          {this.props.players.map( 
            (player, playerIndex) => 
              <DisplayPlayer key={playerIndex} player={player}/>
            )
          }
        </div>
      </div>
      <Board PGN={this.props.PGN} players={this.props.players}/>
      </div>;
  }
}