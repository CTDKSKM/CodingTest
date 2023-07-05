function solution(my_string) {
    let ans = Array(58).fill(0);
    for (let c of my_string) ans[c.charCodeAt()-65]++;
    ans.splice(26,6);
    return ans;
}