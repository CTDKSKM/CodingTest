function solution(word) {
    const setting = new Set()
    const arr = ['A','E','I','O','U', '']
    for(let i=0; i<arr.length-1; i++) {
        for(let j=0; j<arr.length; j++) {
            for(let k=0; k<arr.length; k++) {
                for(let l=0; l<arr.length; l++) {
                    for(let m=0; m<arr.length; m++) {
                        setting.add(arr[i]+arr[j]+arr[k]+arr[l]+arr[m])
                    }
                }
            }
        }
    }
    const index = Array(...setting)
    index.sort()
    
    return index.indexOf(word) + 1;
}

/*

*/