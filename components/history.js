export class History {
  constructor () {
    this.activeNode = new Node(null, null, null);
  }
  
  add = (move) => {
    console.log("new node added");
    this.activeNode = this.activeNode.addKid(move);
    
  }
  
  undo = () => {
    this.activeNode = this.activeNode.getParrent();
    return this.activeNode.position();
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
   * create Kid (provided there is not such a move already)
   * 
   * move: {x: number, y: number}
  **/
  addKid = (move) => {
    //if a node woth this move already exists, return it
    console.log(this);
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
  
  
}