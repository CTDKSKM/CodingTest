function createNode() {
    return {
        children: {},
        isEndOfWord: false,
        lengthCount: {}
    };
}

function insert(root, word) {
    let node = root;
    const length = word.length;
    for (let char of word) {
        if (!node.children[char]) {
            node.children[char] = createNode();
        }
        node = node.children[char];
        if (!node.lengthCount[length]) {
            node.lengthCount[length] = 0;
        }
        node.lengthCount[length]++;
    }
    node.isEndOfWord = true;
}

function countWordsStartingWith(root, prefix) {
    let node = root;
    for (let char of prefix) {
        if (!node.children[char]) {
            return {};
        }
        node = node.children[char];
    }
    return node.lengthCount;
}

function solution(words, queries) {
    const trie = createNode();
    const reverseTrie = createNode();
    const qMap = new Map();
    const answer = [];

    // 단어 삽입
    words.forEach(w => {
        const rw = [...w].reverse().join('');
        insert(trie, w);
        insert(reverseTrie, rw);
    });

    // 쿼리 처리
    queries.forEach(q => {
        if (qMap.has(q)) {
            answer.push(qMap.get(q));
            return;
        }
        
        const len = q.length;
        let cnt;

        if (q[0] === '?' && q[q.length - 1] === '?') {
            // 모두 와일드카드일 경우
            cnt = words.filter(v => v.length === len).length;
        } else if (q[0] === '?') {
            const rq = [...q].reverse().join('');
            cnt = countWordsStartingWith(reverseTrie, rq.slice(0, rq.indexOf('?')))[len] || 0;
        } else {
            cnt = countWordsStartingWith(trie, q.slice(0, q.indexOf('?')))[len] || 0;
        }

        qMap.set(q, cnt);
        answer.push(cnt);
    });

    return answer;
}
