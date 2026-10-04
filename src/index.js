// import './styles.css'

function knightMoves(startCoordinates, endCoordinates) {
  if (String(startCoordinates) === String(endCoordinates)) {
    return String([startCoordinates]);
  };
  
  const allPossibleMovesOfTheStartCoord = getAllPossibleMoves(startCoordinates);
  
  let childAndParentVisitedNodesMap = new Map();
  for (let i = 0; i < allPossibleMovesOfTheStartCoord.length; i++) {
    childAndParentVisitedNodesMap.set(allPossibleMovesOfTheStartCoord[i], String(startCoordinates));
  };

  if (childAndParentVisitedNodesMap.has(String(endCoordinates))) {
    console.log("end finded");
    return;
  };

  let nodesToBeEval = [];
  nodesToBeEval.push(...allPossibleMovesOfTheStartCoord);

  let alreadyEvalNodes = [];
  alreadyEvalNodes.push(String(startCoordinates));

  let i = 0;
  pathSearcherLoop:
  while (nodesToBeEval.length !== 0) {
    i++;
    if (i === 150) {
      console.log("force breaking")
      break
    };

    const arrayOfNrFromStrNode = Array.from(nodesToBeEval[0]);
    let currNodeArrayFromStr = [];
    currNodeArrayFromStr.push(Number(arrayOfNrFromStrNode[0]));
    currNodeArrayFromStr.push(Number(arrayOfNrFromStrNode[2]));

    if (alreadyEvalNodes.includes(String(currNodeArrayFromStr))) {
      nodesToBeEval.shift();
      continue;
    };

    const allPossibleMovesOfCurrNode = getAllPossibleMoves(currNodeArrayFromStr);

    for (let j = 0; j < allPossibleMovesOfCurrNode.length; j++) {
      childAndParentVisitedNodesMap.set(allPossibleMovesOfCurrNode[j], String(currNodeArrayFromStr));

      if (childAndParentVisitedNodesMap.has(String(endCoordinates))) {
        break pathSearcherLoop;
      };

      if (alreadyEvalNodes.includes(allPossibleMovesOfCurrNode[j])) {
        continue;
      }
      nodesToBeEval.push(allPossibleMovesOfCurrNode[j]);
    };

    alreadyEvalNodes.push(String(currNodeArrayFromStr));
    nodesToBeEval.shift();

  };

  console.log(childAndParentVisitedNodesMap);
  console.log(nodesToBeEval);
  console.log(childAndParentVisitedNodesMap.has("7,7"));

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


