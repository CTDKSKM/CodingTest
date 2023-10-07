function solution(k, dungeons) {
    let result = 0;
    const tempArr = getPermutations(Array(dungeons.length).fill(0).map((_,idx)=>idx))
    for(let i=0; i<tempArr.length; i++) {
        let copyK = k
        let temp = 0;
        for(let j=0; j<tempArr[0].length; j++) {
            if (copyK>=dungeons[tempArr[i][j]][0]) {
                copyK -= dungeons[tempArr[i][j]][1]
                temp++
            }
        }
        temp > result ? result = temp : false
    }
    return result;
}

function getPermutations(arr) {
  const permutations = [];

  function generatePermutations(currentPermutation, remainingElements) {
    if (remainingElements.length === 0) {
      permutations.push(currentPermutation);
      return;
    }

    for (let i = 0; i < remainingElements.length; i++) {
      const updatedPermutation = currentPermutation.concat(remainingElements[i]);
      const remainingElementsCopy = [...remainingElements];
      remainingElementsCopy.splice(i, 1);
      generatePermutations(updatedPermutation, remainingElementsCopy);
    }
  }

  generatePermutations([], arr);
  return permutations;
}
