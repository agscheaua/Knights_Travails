function knightMoves(startCoordinates, endCoordinates) {
  if (String(startCoordinates) === String(endCoordinates)) {
    return String([startCoordinates]);
  };
  
  const allPossibleMovesOfTheStartCoord = getAllPossibleMoves(startCoordinates);
  
  let childAndParentVisitedNodesMap = new Map();

  for (let i = 0; i < allPossibleMovesOfTheStartCoord.length; i++) {
    childAndParentVisitedNodesMap.set(allPossibleMovesOfTheStartCoord[i], String(startCoordinates));
  };

  let nodesToBeEval = [];
  nodesToBeEval.push(...allPossibleMovesOfTheStartCoord);

  loopTillQueueisEmpty:
  while (nodesToBeEval.length !== 0) {
    if (childAndParentVisitedNodesMap.has(String(endCoordinates))) {
      break;
    };

    const arrayOfNrFromStrNode = Array.from(nodesToBeEval[0]);
    let currNodeArrayFromStr = [];
    currNodeArrayFromStr.push(Number(arrayOfNrFromStrNode[0]));
    currNodeArrayFromStr.push(Number(arrayOfNrFromStrNode[2]));

    const allPossibleMovesOfCurrNode = getAllPossibleMoves(currNodeArrayFromStr);

    for (let j = 0; j < allPossibleMovesOfCurrNode.length; j++) {      
      if (childAndParentVisitedNodesMap.has(allPossibleMovesOfCurrNode[j])) {
        continue;
      };

      childAndParentVisitedNodesMap.set(allPossibleMovesOfCurrNode[j], String(currNodeArrayFromStr));
     
      if (allPossibleMovesOfCurrNode[j] === String(endCoordinates)) {
        break loopTillQueueisEmpty;
      };

      nodesToBeEval.push(allPossibleMovesOfCurrNode[j]);
    };

  nodesToBeEval.shift();
  };

  let pathTillNode = [];

  function getTheShortestPath(theMap, theKey) {
    const endNode = theMap.get(theKey);

    if (endNode === String(startCoordinates)) {
      pathTillNode.unshift(endNode);
      pathTillNode.push(String(endCoordinates));
      return;
    };
    if (endNode !== String(startCoordinates)) {
      pathTillNode.unshift(endNode);
      getTheShortestPath(theMap, endNode);
    };
  };
  getTheShortestPath(childAndParentVisitedNodesMap, String(endCoordinates));
  
  console.log(childAndParentVisitedNodesMap);
  console.log(nodesToBeEval);
  console.log(pathTillNode);

  return pathTillNode;
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

knightMoves([0,0],[7,7]);