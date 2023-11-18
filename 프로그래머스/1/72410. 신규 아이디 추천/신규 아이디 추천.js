function solution(new_id) {
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789-_.'
    let answer = '';
    new_id = [...new_id].map(v=>v.toLowerCase()).filter(v=>possible.includes(v)).reduce((acc,cur)=>{
        if (acc.length && acc[acc.length-1] == '.' && cur == '.') return acc
        else return acc+cur
    },'');
    if (new_id[0] == '.') new_id = new_id.slice(1)
    if (new_id[new_id.length-1] == '.') new_id = new_id.slice(0,-1)
    if (!new_id.length) new_id += 'a'
    if (new_id.length >= 16) new_id = new_id.slice(0, 15)
    if (new_id[new_id.length-1] == '.') new_id = new_id.slice(0, -1)
    while (new_id.length < 3) {
        new_id += new_id[new_id.length-1]
    }
    return new_id;
}

/*
아이디의 길이는 3자 이상 15자 이하
알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용
단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용불가

new_id의 모든 대문자를 대응되는 소문자로 치환 pass
알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거 pass
마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환 pass
마침표(.)가 처음이나 끝에 위치한다면 제거 pass
빈 문자열이라면, new_id에 "a"를 대입 pass
길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거 pass
제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거 pass
길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복 pass
*/