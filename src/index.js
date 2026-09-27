// import './styles.css'

function knightMoves(startCoordinates, endCoordinates) {

  // this evaluate to true if the start edge is === to the end edge searched;

  if (String(startCoordinates) === String(endCoordinates)) {
    return String([startCoordinates]);
  };
  
  // get all possible, VALID moves we can make from a position, and store them as strings;

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

  // variables that store the visited edges and the queue in witch order we evaluate 
  // each edge(node);

  let nodesToBeEval = [];
  let visitedNodes = [String(startCoordinates)];
  let pathTillEnd = [startCoordinates,];
  let nodeAndChildMap = new Map();

  nodeAndChildMap.set(String(startCoordinates), [...allPossibleMoves]);
  console.log(nodeAndChildMap);

  // we push in the queue array, the first valid possible moves we can make from the startCoordinates
  // position;

  for (let i = 0; i < allPossibleMoves.length; i++) {
    nodesToBeEval.push(allPossibleMoves[i]);
  };
  console.log(nodesToBeEval);

  // evaluate all the nodes in the queue, break is we find the endCoordinates, skip those alredy eval nodes,
  // push uneval nodes in the array of visited and eval them;

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

            nodeAndChildMap.set(String(currNodeEdge), [...allPossibleMovesChildNode]);
            
            let endFinded = false;
            for (let i = 0; i < allPossibleMovesChildNode.length; i++) {
              if (allPossibleMovesChildNode[i] === String(endCoordinates)) {
                pathTillEnd.push(endCoordinates);  
                endFinded = true;
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

  console.log(visitedNodes);
  console.log(nodesToBeEval);
  console.log(pathTillEnd);
  console.log(nodeAndChildMap);
  console.log(nodeAndChildMap.values());

};

console.log(knightMoves([0,0],[7,7]));

