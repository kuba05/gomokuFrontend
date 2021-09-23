export class Player {
  constructor (name) {
    this.name = name;
    this.isOnMove = false;
    this.callback = null;
    this.registeredCallbacks = [];
  }
  
  /**
  * Is called whenever player's turn is started
  * 
  * callback(x: number, y: number) : void - method that Player uses to making a move
  * 
  * gameState: any - our FEN variant
  **/
  startTurn (callback, gameState) {
    this.isOnMove = true;
    this.callback = callback;
    //TODO: use real events
    this.sentCallbacks();
  }
  
  /**
  * is called whenever player's turn is ended
  **/
  endTurn () {
    this.isOnMove = false;
    this.callback = null;
    //TODO: use real events
    this.sentCallbacks();
  }
  
  /**
   * is called whenever any tile is clicked
   * 
   * tile: {x: number, y: number, value: number}
  **/
  tileClicked (tile) {
    if (this.isOnMove && tile.value === null) {
      //console.log(tile);
      this.callback(tile);
    }
  }
  
  /**
   * callback: (event: any) => void - callback which is called whenever am event is raised
   **/
  registerForEvents (callback) {
    this.registeredCallbacks.push(callback);
  }
  
  /**
   * callback: (event: any) => void - if the given callback was registered, unregister it
   **/
  unregisterForEvents (callback) {
    //TODO
  }
  
  /**
   * sent events to everyone whe subscribed for them
   **/
  sentCallbacks (event) {
    this.registeredCallbacks.map(callback => callback(event));
  }
}