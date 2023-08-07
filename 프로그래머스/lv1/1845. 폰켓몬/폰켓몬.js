function solution(nums) {
    const result = new Set(nums);
    return result.size <= nums.length/2 ? result.size : nums.length/2;
}