function solution(n, words) {
    const ans = (i,n) => [(i+1)%n||n, Math.ceil((i+1)/n)],
          said = [words[0]];

    for (let i = 1; i < words.length; i++){
        const cur = words[i], // current word
              pre = words[i-1]; // previous word

        // Does it match the rules?
        //   IF 끝말잇기 실패 or used word - return
        //   ELSE push to said words array
        if (cur[0] !== pre[pre.length-1] ||said.includes(cur)) return ans(i,n)
        else said.push(cur)
    }

    // It was a good game.
    return [0,0];
}