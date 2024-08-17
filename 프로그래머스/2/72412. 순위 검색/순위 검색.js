function bisectLeft(arr, score) {
    let start = 0;
    let end = arr.length;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] < score) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return start;
}

class Node {
    constructor() {
        this.child = {};
        this.data = [];
    }
}

class Trie {
    constructor() {
        this.head = new Node();
    }

    insert(info) {
        let currentNode = this.head;
        let n = info.length;
        for (let i = 0; i < n - 1; i++) {
            if (!currentNode.child[info[i]]) {
                currentNode.child[info[i]] = new Node();
            }
            currentNode = currentNode.child[info[i]];
        }

        let scores = currentNode.data;
        let score = parseInt(info[n - 1], 10);
        let idx = bisectLeft(scores, score);
        scores.splice(idx, 0, score);
    }

    search(query) {
        let currentNode = [this.head];
        let n = query.length;

        for (let i = 0; i < n - 1; i++) {
            let nextCurrentNode = [];
            if (query[i] === '-') {
                for (let node of currentNode) {
                    for (let key in node.child) {
                        nextCurrentNode.push(node.child[key]);
                    }
                }
            } else {
                for (let node of currentNode) {
                    if (query[i] in node.child) {
                        nextCurrentNode.push(node.child[query[i]]);
                    }
                }
            }
            currentNode = nextCurrentNode;
        }

        let count = 0;
        let score = parseInt(query[n - 1], 10);

        for (let node of currentNode) {
            let scores = node.data;
            let l = bisectLeft(scores, score);
            count += scores.length - l;
        }

        return count;
    }
}

function solution(info, query) {
    let trie = new Trie();
    for (let i of info) {
        trie.insert(i.split(' '));
    }

    let answer = [];
    for (let q of query) {
        q = q.replace(/ and/g, '').split(' ');
        answer.push(trie.search(q));
    }

    return answer;
}
