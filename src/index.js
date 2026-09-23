// import './styles.css'

function knightMoves(startCoordinates, endCoordinates) {
  if (String(startCoordinates) === String(endCoordinates)) {
    return String([startCoordinates]);
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
  const allPossibleMoves = getAllPossibleMoves(startCoordinates);
  console.log(allPossibleMoves);

  let nodesToBeEval = [];
  let visitedNodes = [];

  for (let i = 0; i < allPossibleMoves.length; i++) {
    nodesToBeEval.push(allPossibleMoves[i]);
  };
  console.log(nodesToBeEval);

  let loopBreaker = 0
  while(nodesToBeEval.length !== 0) {
    loopBreaker++
    if (loopBreaker > 30) {
      console.log("force break");
      break;
    };

    if (nodesToBeEval[0] === String(endCoordinates)) {
      console.log("endCoord find");
      break;
    } else if (nodesToBeEval[0] !== String(endCoordinates)) {
        console.log("....")
    }


  };


  /*
  let visitedNodes = [];
  let queueOfNodeToBeVisited = [];

  for (let i = 0; i < initialMoves.length; i++) {
    queueOfNodeToBeVisited.push(initialMoves[i]);
  };

  function checkIfNodeIsEndCoord(node) {
    if (node === String(endCoordinates)) return true;
    return false;
  };

  function checkIfNodeWasVisited(node) {
    if (visitedNodes.includes(node)) return true;
    return false;
  };

  function enqueueNodeChildren(node) {
    const nodeChildren = getAllPossibleMoves(node);
    for (let i = 0; i < nodeChildren.length; i++) {
      if (checkIfNodeWasVisited(nodeChildren[i]) === true) continue;
      else {
        queueOfNodeToBeVisited.push(nodeChildren[i]);
      };
    };
  };

  function evaluateNodes() {
    for (let i = 0; queueOfNodeToBeVisited.length !== 0; i++) {
      if (checkIfNodeIsEndCoord(queueOfNodeToBeVisited[0]) === true) break;
      if (checkIfNodeWasVisited(queueOfNodeToBeVisited[0]) === true) {
        continue;
      } else {
        visitedNodes.push(queueOfNodeToBeVisited[0]);
      };
      enqueueNodeChildren(queueOfNodeToBeVisited[0]);
      queueOfNodeToBeVisited.unshift();
    };  
  };
  evaluateNodes();
  */


  /*
  let queueOfNodeToBeEval = [];
  for (let i = 0; i < possibleMoves.length; i++) {
    queueOfNodeToBeEval.push(possibleMoves[i]);
  };
  
  let alreadyEvalNode = [];
  function evaluateNodes(currMoves) {
    for (let i = 0; queueOfNodeToBeEval !== 0; i++) {
      if (String(queueOfNodeToBeEval[i]) === String(endCoordinates)) {
        break;
      };
      if (String(queueOfNodeToBeEval[i]) !== String(endCoordinates)) {
        if (alreadyEvalNode.length === 0) {
          alreadyEvalNode.push(String(queueOfNodeToBeEval[i]));
        } else {
            if (alreadyEvalNode.includes(String(queueOfNodeToBeEval[i]))) {
              continue;
            } else {
              alreadyEvalNode.push(String(queueOfNodeToBeEval[i]))
            };
        };
      };
      const possibleMovesOfCurrentNode = getAllPossibleMoves(queueOfNodeToBeEval[0]);
      for (let j = 0; j < possibleMovesOfCurrentNode.length; i++) {
        queueOfNodeToBeEval.push(possibleMovesOfCurrentNode[j]);
      };
      
      queueOfNodeToBeEval.unshift();

      console.log(queueOfNodeToBeEval);
    };
  };
  evaluateNodes()
  */

};

console.log(knightMoves([0, 0], [3, 3]));



