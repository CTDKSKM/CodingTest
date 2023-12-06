function solution(routes) {
    let cnt = 0;
  let camera = -30001;
  routes.sort((a,b)=>a[1]-b[1]);
  for(let item of routes){
    if(item[0]>camera){
      cnt++;
      camera=item[1];
    }
  }
 return cnt;
}