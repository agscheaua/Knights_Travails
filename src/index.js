// import './styles.css'

/*
class ChessBoard {
  constructor() {
  };

  #board = [];
  #rows = [0,1,2,3,4,5,6,7];
  #columns = [0,1,2,3,4,5,6,7];

  createBoard() {
    let rowIndex = 0;
    let columnIndex = 0;
    let rowPointer = this.#rows[rowIndex];
    let columnPointer = this.#columns[columnIndex];

    const changeRowAndColumn = () => {
      rowPointer = this.#rows[rowIndex];
      columnPointer = this.#columns[columnIndex];
    };

    let i = 0;
    const rowsXcolumns = this.#rows.length * this.#columns.length;
    while (i < rowsXcolumns) {
      if (columnIndex === 8) {
        rowIndex++;
        columnIndex = 0;
        changeRowAndColumn();
      };

      this.#board[[rowPointer, columnPointer]] = null;

      i++
      columnIndex++
      changeRowAndColumn();
    };
    console.log(this.#board);
  }

  createKnight() {
    console.log(this.#board[[2,3]]);
  }
} 

const test1 = new ChessBoard;
test1.createBoard();
test1.createKnight();
*/

function createListToStorePossibleMoves() {
  let vertices = [0,1,2,3,4,5,6,7];

  let possibleMoves = [];

  let i = 0;
  while (i < vertices.length) {
    possibleMoves[i] = [];
    i++;
  };

  return {
    possibleMoves,
  }
};
const listOfPossibleMoves = createListToStorePossibleMoves();


function createKnight(row, column) {
  if (row < 0 || row > 7 || column < 0 || column > 7) {
    throw new Error("The knight possition is invalid");
  };

  listOfPossibleMoves.possibleMoves[row][column] = "knight";
}
const myKnight = createKnight(1,5);



console.log(listOfPossibleMoves.possibleMoves);