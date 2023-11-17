const solution = (bridgeLength, weight, truckWeights) => {
  const progress = [];
  let i = 1;
  while(true) {
    progress.map((item, j) => {
      if(item.end === i) progress.splice(j, 1);
    });

    if (progress.reduce((p, c) => p + c.weight, 0) + truckWeights[0] <= weight) {
      progress.push({ end: i + bridgeLength, weight: truckWeights.shift() });
    }

    if(!progress.length && !truckWeights.length) break;
    i += 1;
  }

  return i;
};