/**
 * Unpack given pgn
 * 
 * pgn: string
 * 
 * output: {"FEN": string, "PlayerOnMove": number}
 * 
 * TODO
 **/
const parsePGN = (pgn) => {
  return {
    "FEN": "3/1x1/3",
    "PlayerOnMove": 1
  }
}
/**
 * FEN: string
 * 
 * output: int[][]
 * 
 * TODO
 **/
const parseFEN = (FEN) => {
  //for each row
  FEN.split("/").map(
    row => {
      let output = [];
      let number = "";
      for (let char of row) {
        if (char in ["x", "O"]) {
          output.push(1);
        } else {
          number += char;
        }
      }
      return output;
    }
  )
  return [
    [null, null, null],
    [null, 0, null],
    [null, null, null]
  ]
}

export default {parseFEN, parsePGN};