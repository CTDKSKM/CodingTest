function solution(word) {
    const setting = new Set();
    const str = ['A','E','I','O','U', ''];
    const len = str.length;
    for(let i=0; i<len-1; i++) {
        for(let j=0; j<len; j++) {
            for(let k=0; k<len; k++) {
                for(let l=0; l<len; l++) {
                    for(let m=0; m<len; m++) {
                        setting.add(str[i]+str[j]+str[k]+str[l]+str[m])
                    }
                }
            }
        }
    }
    const index = Array(...setting).sort();

    return index.indexOf(word) + 1;
}