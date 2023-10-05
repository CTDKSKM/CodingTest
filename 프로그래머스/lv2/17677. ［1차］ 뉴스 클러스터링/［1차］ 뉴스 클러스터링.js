function solution(str1, str2) {
    // 물밑작업하자
    const a = prep(str1), b = prep(str2);

    // 교, 합집합을 찾아보자
    const int = {}, uni = {};

    // a집합을 먼저 둘러보자
    for (const p in a){
        if(b[p] === undefined) {
            // b 집합에는 없다! => 합집합에만 넣자
            uni[p] = a[p];
        } else {
            // 양쪽에 다있다! => 양쪽에 다넣자
            // 교집합의 경우 더 작은 수를, 합집합의 경우 더 큰 수를 넣자.
            int[p] = Math.min(a[p], b[p]);
            uni[p] = Math.max(a[p], b[p]);
        }
    }
    // 이 단계에서 교집합은 완료 되었다

    // b 집합에만 있는 녀석들을 합집합에 추가해주자
    for (const p in b){
        if(uni[p] === undefined) {
            uni[p] = b[p];
        }
    }

    // 갯수를 셔보자
    let iC = 0, uC = 0;

    for (const p in int) iC += int[p];
    for (const p in uni) uC += uni[p];

    // 합집합이가 공집합이면 65536을, 아니면 시키는대로 해서
    // 돌려주자 (~~ 는 양수에 적용 가능한 플로어링 테크닉임)

    return uC ? ~~(65536*iC/uC) : 65536;
}

function prep(str){
    // 대소문자 동일 취급
    str = str.toLowerCase();

    // {요소: 횟수}로 매핑해보자
    const ans = {};
    for (let i = 0; i < str.length-1; i++){
        // 두 캐릭터 중에 하나라도 알파벳 아니면 무시하자
        if (str[i] < 'a' || 'z' < str[i]) continue;
        if (str[i+1] < 'a' || 'z' < str[i+1]) continue;

        // 이 요소를 key로, 이 요소의 등장횟수를 value로 기록하자
        const el = str[i]+str[i+1];
        ans[el] = (ans[el]||0) + 1;
    }

    // 돌려주자
    return ans;
}