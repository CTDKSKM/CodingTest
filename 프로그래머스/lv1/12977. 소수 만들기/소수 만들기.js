function solution(nums) {
    const arr = []
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(let k=j+1; k<nums.length; k++) {
                arr.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    
    return arr.filter(v=>{
        for(let i=2; i<=Math.sqrt(v); i++) {
            if (v % i === 0) return false
        }
        return true
    }).length;
}