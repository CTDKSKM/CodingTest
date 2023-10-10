function solution(n, k) {
  return convertToKNumber(n, k).split(0).filter(val=>val!=1 && val!='').map(val=>{
      const num = +val;
      if (num == 2) return 1
      for(let i=3; i<=Math.sqrt(num); i++) {
          if(num%i==0) return 0
      }
      return 1
  }).reduce((a,c)=>a+c,0);
}

function convertToKNumber(n, k) {
  let result = "";
  
  while (n > 0) {
    result = (n % k) + result;
    n = Math.floor(n / k);
  }
  
  return result;
}
