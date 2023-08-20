function solution(s) {
    const len = s.length;
  let cnt = 0;
  if (s.length % 2 !== 0) return 0;
  let arr = [...s];
  let temp;
  let istrue = true;
  for (let i = 0; i < len; i++) {  
    let pre = [];
    for (let j = 0; j < len; j++) {
      if (arr[j] === "(" || arr[j] === "{" || arr[j] === "[") {
        pre.push(arr[j]);
      } else {
        const temp2 = pre.pop();
        if (temp2 === undefined) {
            istrue = false;
        }
        else if (
          arr[j].charCodeAt() !== temp2.charCodeAt() + 1 &&
          arr[j].charCodeAt() !== temp2.charCodeAt() + 2
        ) {
          console.log(arr[j].charCodeAt(0), temp2 !== undefined && temp2.charCodeAt() + 1);
          istrue = false;
        }
      }
      if (istrue === false) break;
    }

    if (istrue === true) ++cnt;
    temp = arr.shift();
    arr.push(temp);
    istrue = true;
  }

  return cnt;
}