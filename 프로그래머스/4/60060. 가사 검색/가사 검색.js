function counts(arr, t) {
    const replace = (str, char) => str.replace(/\?/g, char);
    const a = bisectLeft(arr, replace(t, 'a'));
    const z = bisectRight(arr, replace(t, 'z'));
    return z - a;
}

function bisectLeft(arr, x) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (arr[mid] < x) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

function bisectRight(arr, x) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (arr[mid] <= x) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

function solution(words, queries) {
    const result = [];
    words.sort();
    const wordsReverse = [...words].map(word => word.split('').reverse().join('')).sort();
    const newWordsReverses = {};
    const newWordss = {};

    for (const q of queries) {
        if (q[0] === '?') {
            if (!newWordsReverses.hasOwnProperty(q.length)) {
                newWordsReverses[q.length] = wordsReverse.filter(word => word.length === q.length);
            }
            result.push(counts(newWordsReverses[q.length], q.split('').reverse().join('')));
        } else {
            if (!newWordss.hasOwnProperty(q.length)) {
                newWordss[q.length] = words.filter(word => word.length === q.length);
            }
            result.push(counts(newWordss[q.length], q));
        }
    }
    return result;
}