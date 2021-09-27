/**
 * Unpack given pgn
 * 
 * pgn: string
 * 
 * output: {"FEN": string, "PlayerOnMove": number}
 * 
 * FIXME
 **/
const parsePGN = (pgn) => {
  return {
    "FEN": "5/5/2x2/5/5",
    "PlayerOnMove": 1
  }
}
/**
 * FEN: string
 * 
 * output: int[][] - board (null is empty square, 0 is an X, 1 is an O)
 * 
 * FIXME
 **/
const parseFEN = (FEN) => {
  
  //for each row
  let board = FEN.split("/").map(
    row => {
      let output = [];
      let numberOfEmptyFields = 0;
      for (let char of row) {
        let digit = parseInt(char);
        
        //char is not a digit
        if (isNaN(digit)) {
          for (let i = 0; i < numberOfEmptyFields; i++) {
            output.push(null);
          }
          numberOfEmptyFields = 0;
          if (char === "x") {
            output.push(0);
          } else if (char === "O") {
            ouput.push(1);
          }
          continue;
        }
        
        //char is a digit
        numberOfEmptyFields = numberOfEmptyFields * 10 + digit;
      }
      for (let i = 0; i < numberOfEmptyFields; i++) {
        output.push(null);
      }
      return output;
    }
  )
  
  console.log(board);
  
  return board;
}

export default {parseFEN, parsePGN};