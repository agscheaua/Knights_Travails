// import './styles.css'

let pathToEnd = [];

function knightMoves(startCoordinates, endCoordinates) {
  let allNodePossibleMoves = [];
  allNodePossibleMoves.push([startCoordinates[0] - 1, startCoordinates[1] - 2]);
  allNodePossibleMoves.push([startCoordinates[0] - 2, startCoordinates[1] - 1]);
  allNodePossibleMoves.push([startCoordinates[0] - 2, startCoordinates[1] + 1]);
  allNodePossibleMoves.push([startCoordinates[0] - 1, startCoordinates[1] + 2]);
  allNodePossibleMoves.push([startCoordinates[0] + 1, startCoordinates[1] + 2]);
  allNodePossibleMoves.push([startCoordinates[0] + 2, startCoordinates[1] + 1]);
  allNodePossibleMoves.push([startCoordinates[0] + 2, startCoordinates[1] - 1]);
  allNodePossibleMoves.push([startCoordinates[0] + 1, startCoordinates[1] - 2]);

  let allVALIDPossibleMoves = [];
  for (let i = 0; i < allNodePossibleMoves.length; i++) {
    if ((allNodePossibleMoves[i][0] >= 0 && allNodePossibleMoves[i][0] < 8) &&
        (allNodePossibleMoves[i][1] >= 0 && allNodePossibleMoves[i][1] < 8)) {
      allVALIDPossibleMoves.push(allNodePossibleMoves[i]);
    };
  };

  if (allVALIDPossibleMoves.length === 0) {
    throw new Error ("The knight cannot reach that sqare!");
  };

  for (let j = 0; j < allVALIDPossibleMoves.length; j++) {
    if (String(allVALIDPossibleMoves[j]) === String(endCoordinates)) {
      break;
    };
  };

  pathToEnd.push([startCoordinates]);
  pathToEnd[startCoordinates] = [allVALIDPossibleMoves];

  console.log(pathToEnd);
};

console.log(knightMoves([0,0], [3, 3]));

