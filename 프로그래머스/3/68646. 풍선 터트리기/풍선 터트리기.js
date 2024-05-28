function solution(a) {
  let arr = Array(a.length).fill(1)
  let minR = a[a.length-1]
  let minL = a[0]
  let ans = 0
  for (let i = a.length-2;i>0;i--) {
    if (a[i]<minR) minR = a[i]
    else arr[i] = 0
  }
  for (let i = 0;i<a.length;i++){
    if (a[i]<=minL) {
      minL = a[i]
      ans++
    }
    else if (arr[i]) ans++
  }
  return ans
}