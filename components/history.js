import React from "react";

export class History {
  constructor () {
    this.activeNode = new Node(null, null, null);
  }
  
  add = (move) => {
    console.log("new node added");
    this.activeNode = this.activeNode.addKid(move);
    
  }
  
  undo = () => {
    let moveUndone = this.activeNode.move;
    this.activeNode = this.activeNode.getParent();
    console.log("new active node");
    console.log(this.activeNode);
    return moveUndone;
  }
  
  /**
   * return JSX display of history
  **/
  getJSX = () => {
    console.log("gettingJsx");
    //find the root node
    let root = this.activeNode;
    while (root.parent) {
      root = root.parent;
    }
    console.log(root);
    console.log("jsx:" + root.getJSX())
    return <div className="history">
      <div className="moves">
        {root.getJSX()}
      </div>
    </div>
  }
}

class Node {
  /**
   * move: {x: number, y: number}
   * player: Player
   * parent: Node | null
  **/
  constructor (move, player, parent) {
    this.move = move;
    this.player = player;
    this.parent = parent;
    this.kids = [];
  }
  
  /**
   * returns parent of this Node. If this node has no parrent, the Node itself is returned
  **/
  getParent = () => {
    return this.parent? this.parent: this;
  }
  
  /**
   * create Kid (provided there is not such a move already)
   * 
   * move: {x: number, y: number}
  **/
  addKid = (move) => {
    //if a node woth this move already exists, return it
    let kids = this.kids.filter(kid => kid.move.x === move.x && kid.move.y === move.y);
    if (kids.length) {
      return kids[0];
      
    //if not, create new one
    } else {
      let newKid = new Node(move, (this.player+1)%2, this);
      this.kids.push(newKid);
      return newKid;
    }
  }
  
  /**
   * returns JSX implementation of Node
   * 
   * activeNode has a different css
   * 
   * activeNode: Node
  **/
  getJSX = (activeNode) => {
    let move = this.move ? this.move.x + "," + this.move.y: "";
    return (
      <React.Fragment>
        {
          // This Node
          this.move && <span className="m-5">{this.move.x + ", " + this.move.y}</span>
        }
        {
          this.kids.slice(1).map((kid) => <span> ({kid.getJSX()})</span>)
        }
        { 
          //main kid
          this.kids.length > 0 && this.kids[0].getJSX()
        }
      </React.Fragment>
    );
  }
}