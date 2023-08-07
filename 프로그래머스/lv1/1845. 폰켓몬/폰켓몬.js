function solution(nums) {
    const result = new Set();
    for(let i=0; i<nums.length; i++) {
        result.add(nums[i])
    }
    return result.size <= nums.length/2 ? result.size : nums.length/2;
}