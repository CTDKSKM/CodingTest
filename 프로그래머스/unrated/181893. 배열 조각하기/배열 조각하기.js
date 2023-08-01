function solution(arr, query) {
    let answer = [...arr];
   var f=0;
    var e=0;

  for(let i=0;i<query.length;i++){

    if(i%2===0){//짝수
        e=f+query[i];
      //answer = answer.slice(0,query[i])
    }else if(i%2===1){//홀수
        f=f+query[i];
      //answer = answer.slice(query[i],answer.length);
    }
  }

  answer=answer.slice(f,e+1);

  return answer.length>0?answer:[-1]
}