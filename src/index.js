// import './styles.css'

function knightMoves(startCoordinates, endCoordinates) {
  if (String(startCoordinates) === String(endCoordinates)) {
    return String([startCoordinates]);
  };
  
  const allPossibleMoves = getAllPossibleMoves(startCoordinates);
  
  let visitedNodes = [
    ["start", String(startCoordinates)]
  ];
  let nodesToBeEval = [];
  let pathTillTheEnd = [];

  nodesToBeEval.push([String(startCoordinates), ...allPossibleMoves]);

  console.log(nodesToBeEval);
  console.log(visitedNodes);

  let i = 0;
  while(nodesToBeEval.length !== 0) {
    i++;
    if (i === 50) break;

    if (nodesToBeEval[0].includes(String(endCoordinates))) {
      console.log(1);
    };
    

  };

  /*
  while(nodesToBeEval.length !== 0) {
    if (nodesToBeEval[0] === String(endCoordinates)) {
      console.log("endCoord find");
      break;
    } else if (nodesToBeEval[0] !== String(endCoordinates)) {
        if (visitedNodes.includes(nodesToBeEval[0]) === true) {
          nodesToBeEval.shift();
          continue;
        } else if (visitedNodes.includes(nodesToBeEval[0]) === false) {
            const arrayFromString = Array.from(nodesToBeEval[0]);

            let currNodeEdge = [];
            currNodeEdge.push(Number(arrayFromString[0]));
            currNodeEdge.push(Number(arrayFromString[2]));

            const allPossibleMovesChildNode = getAllPossibleMoves(currNodeEdge);
 
            let endFinded = false;
            for (let i = 0; i < allPossibleMovesChildNode.length; i++) {
              if (allPossibleMovesChildNode[i] === String(endCoordinates)) {  
                endFinded = true;
                console.log("will break");
                visitedNodes.push(nodesToBeEval[0]);
                break;
              };
            };

            if (endFinded === true) break;

            for (let i = 0; i < allPossibleMovesChildNode.length; i++) {
              if (visitedNodes.includes(allPossibleMovesChildNode[i]) === true) continue;
              if (visitedNodes.includes(allPossibleMovesChildNode[i]) === false) {
                nodesToBeEval.push(String(allPossibleMovesChildNode[i]));
              };
            };

            visitedNodes.push(nodesToBeEval[0]);
            nodesToBeEval.shift();
        };
      };
  };
  */


  console.log(visitedNodes);
  console.log(nodesToBeEval);

};

function getAllPossibleMoves(currentLocation) {
    
  let allPossibleMoves = [];
  allPossibleMoves.push([currentLocation[0] - 1, currentLocation[1] - 2]);
  allPossibleMoves.push([currentLocation[0] - 2, currentLocation[1] - 1]);
  allPossibleMoves.push([currentLocation[0] - 2, currentLocation[1] + 1]);
  allPossibleMoves.push([currentLocation[0] - 1, currentLocation[1] + 2]);
  allPossibleMoves.push([currentLocation[0] + 1, currentLocation[1] + 2]);
  allPossibleMoves.push([currentLocation[0] + 2, currentLocation[1] + 1]);
  allPossibleMoves.push([currentLocation[0] + 2, currentLocation[1] - 1]);
  allPossibleMoves.push([currentLocation[0] + 1, currentLocation[1] - 2]);

  let allVALIDPossibleMoves = [];
  for (let i = 0; i < allPossibleMoves.length; i++) {
    if ((allPossibleMoves[i][0] >= 0 && allPossibleMoves[i][0] < 8) &&
        (allPossibleMoves[i][1] >= 0 && allPossibleMoves[i][1] < 8)) {
      allVALIDPossibleMoves.push(String(allPossibleMoves[i]));
    };
  };

  return allVALIDPossibleMoves;
};

knightMoves([0,0],[1,2]);

