function solution(str1, str2) {
    const a = prep(str1), b = prep(str2);

    const int = {}, uni = {};

    for (const p in a){
        if(b[p] === undefined) {
            uni[p] = a[p];
        } else {
            int[p] = Math.min(a[p], b[p]);
            uni[p] = Math.max(a[p], b[p]);
        }
    }

    for (const p in b){
        if(uni[p] === undefined) {
            uni[p] = b[p];
        }
    }

    let iCount = 0, uCount = 0;

    for (const p in int) iCount += int[p];
    for (const p in uni) uCount += uni[p];

    return uCount ? Math.floor(65536*iCount/uCount) : 65536;
}

function prep(str){
    str = str.toLowerCase();

    const ans = {};
    for (let i = 0; i < str.length-1; i++){
        if (str[i] < 'a' || 'z' < str[i]) continue;
        if (str[i+1] < 'a' || 'z' < str[i+1]) continue;

        const el = str[i]+str[i+1];
        ans[el] = (ans[el]||0) + 1;
    }

    return ans;
}