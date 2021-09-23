import React from 'react';

import { Duel } from './index.js';
import { Player } from '../components/index.js';

export class LocalDuel extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      players: [new Player("player1"), new Player("player2")]
    };
  }
  
  render () {
    console.log(this.state.players)
    return <Duel players={this.state.players} PGN={""}/>
  }
}