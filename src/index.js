// import './styles.css'

function knightMoves(startCoordinates, endCoordinates) {
  if (String(startCoordinates) === String(endCoordinates)) {
    return String([startCoordinates]);
  };
  
  const allPossibleMoves = getAllPossibleMoves(startCoordinates);
  
  let visitedNodes = [
    [String(startCoordinates), ...allPossibleMoves]
  ];
  let nodesToBeEval = [];
  let pathTillTheEnd = [];

  nodesToBeEval.push(...allPossibleMoves);
  
  searchNodesToBeEval:
  while (nodesToBeEval.length !== 0) {

    if (nodesToBeEval.includes(String(endCoordinates))) {
      break searchNodesToBeEval;
    };

    for (let i = 0; i < visitedNodes.length; i++) {
      if (visitedNodes[i][0] === nodesToBeEval[0]) {
        nodesToBeEval.shift();
        continue searchNodesToBeEval;
      };
    };

    const arrayFromStrNode = Array.from(nodesToBeEval[0]);
    let currNodeArrayFromStr = [];
    currNodeArrayFromStr.push(Number(arrayFromStrNode[0]));
    currNodeArrayFromStr.push(Number(arrayFromStrNode[2]));
           
    const allPossibleMovesOfCurrNode = getAllPossibleMoves(currNodeArrayFromStr);

    visitedNodes.push([String(currNodeArrayFromStr), ...allPossibleMovesOfCurrNode]);
    
    for (let i = 0; i < allPossibleMovesOfCurrNode.length; i++) {
      if (nodesToBeEval.includes(allPossibleMovesOfCurrNode[i])) {
        continue;
      };
      nodesToBeEval.push(allPossibleMovesOfCurrNode[i]);
    };

    nodesToBeEval.shift();
  };

  if (visitedNodes[visitedNodes.length-1].includes(String(endCoordinates))) {
    pathTillTheEnd.unshift(String(endCoordinates));
    pathTillTheEnd.unshift(visitedNodes[visitedNodes.length-1][0]);
  };

  let i = 0;
  while (pathTillTheEnd[0] !== String(startCoordinates)) {
    i++
    if (i === 100) break;

    for (let i = 0; i < visitedNodes.length; i++) {
      if (visitedNodes[i].includes(pathTillTheEnd[0])) {
        console.log(visitedNodes[i]);
        pathTillTheEnd.unshift(visitedNodes[i][0]);
        break;
      };
    };
  };

  console.log(visitedNodes);
  console.log(nodesToBeEval);
  console.log(pathTillTheEnd);

  /*
  let i = 0;
  endCoordFinded: 
  while(nodesToBeEval.length !== 0) {
    i++;
    if (i === 100) {
      console.log("force break");
      break;
    };

    if (nodesToBeEval[0].includes(String(endCoordinates))) {
      visitedNodes.push([...nodesToBeEval[0]]);
      pathTillTheEnd.push(String(endCoordinates));
      nodesToBeEval = [];
    } else if (!(nodesToBeEval[0].includes(String(endCoordinates)))) {
        if (visitedNodes.includes(nodesToBeEval[0])) {
          console.log("continue");
          nodesToBeEval.shift();
          continue;
        } else {
            for (let i = 1; i < nodesToBeEval[0].length; i++) {
              const arrayFromStrNode = Array.from(nodesToBeEval[0][i]);
              let currNodeArrayFromStr = [];
              currNodeArrayFromStr.push(Number(arrayFromStrNode[0]));
              currNodeArrayFromStr.push(Number(arrayFromStrNode[2]));

              if (visitedNodes.includes(String(currNodeArrayFromStr))) {
                console.log("continue");
                nodesToBeEval.shift();
                continue;
              };
               
              const allPossibleMovesOfCurrNode = getAllPossibleMoves(currNodeArrayFromStr);
              
              if (allPossibleMovesOfCurrNode.includes(String(endCoordinates))) {
                pathTillTheEnd.push(nodesToBeEval[0][i]);
                pathTillTheEnd.push(String(endCoordinates));
                nodesToBeEval = [];
                break endCoordFinded;
              } else {
                nodesToBeEval.push(...allPossibleMovesOfCurrNode);
                visitedNodes.push([String(currNodeArrayFromStr), ...allPossibleMovesOfCurrNode]);
                nodesToBeEval.shift();
              };




            };
        };

      };
    

  };
  */

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

