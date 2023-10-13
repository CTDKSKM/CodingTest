class MinHeap {
    //생성자 함수
    constructor() {
        this.heap = [];
    }

    //index를 가져오는 함수
    getParentIdx(childIdx) {
        return Math.floor((childIdx - 1) / 2);
    }
    getLeftChildIdx(parentIdx) {
        return (parentIdx *  2) + 1;
    }
    getRightChildIdx(parentIdx) {
        return (parentIdx * 2) + 2;
    }

    //heap tree의 노드개수를 세어주는 함수
    size() {
        return this.heap.length;
    }

    //두 값을 swap해준다.
    swap(Idx_1, Idx_2) {
        [this.heap[Idx_1], this.heap[Idx_2]] = [this.heap[Idx_2], this.heap[Idx_1]];

        return this.heap;
    }

    //새로운 노드를 heap tree의 마지막 노드에 push해주는 함수
    push(value) {
        this.heap.push(value);
        this.bubbleUp();

        return this.heap;
    }
    //최상단 head node를 pop해주는 함수
    pop() {
        if(this.size() == 1) {
            return this.heap.pop();
        }
        if(this.size() == 0) {
            return null;
        }
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }

    //맨 마지막 노드에서 출발해서 최상단 노드까지 올라가면서 bubble up 한다.
    bubbleUp() {
        let child_Idx = this.size() - 1;
        let parent_Idx = this.getParentIdx(child_Idx);

        while (this.heap[child_Idx] < this.heap[parent_Idx]) {
            this.swap(child_Idx, parent_Idx);
            child_Idx = parent_Idx;
            parent_Idx = this.getParentIdx(child_Idx);
        }
    }

    //최상단 노드에서 마지막노드까지 내려가면서 bubble down 한다.
    bubbleDown() {
        let parent_Idx = 0;
        let left_Idx = this.getLeftChildIdx(parent_Idx);
        let right_Idx = this.getRightChildIdx(parent_Idx);

        while((left_Idx <= this.size() - 1 && this.heap[left_Idx] < this.heap[parent_Idx]) || (right_Idx <= this.size() - 1 && this.heap[right_Idx] < this.heap[parent_Idx])) {
            //오른쪽이 왼쪽보다 작고 오른쪽 노드가 존재한다면
            if(this.heap[right_Idx] < this.heap[left_Idx] && right_Idx <= this.size() - 1){
                //오른쪽과 부모노드를 swap 한다.
                this.swap(right_Idx, parent_Idx);
                parent_Idx = right_Idx;
                right_Idx = this.getRightChildIdx(parent_Idx);
                left_Idx = this.getLeftChildIdx(parent_Idx);
            } else {
                //왼쪽과 부모노드를 swap 한다.
                this.swap(left_Idx, parent_Idx);
                parent_Idx = left_Idx;
                right_Idx = this.getRightChildIdx(parent_Idx);
                left_Idx = this.getLeftChildIdx(parent_Idx);
            }
        }
    }
}


function solution(scoville, K) {
    scoville.sort((a,b)=> b - a) 
    let cnt = 0 ;
    let under_K = []
    let flag = 0 // 다 합쳐서 K보다 큰지 안큰지 판별 0이면 안큰거 1이면 큰거

    for(let i = 0 ; i < scoville.length ; ++i){
        if(scoville[i] < K){
            under_K.push(scoville[i])
        }
        else{
            flag = 1
        }
    }    
   // console.log(under_K)
    let mixed = []
    let m_i = 0
    let i = 0
    let n1 = 0 
    let n2 = 0
    while(1){
       // console.log(mixed, n1 , n2)
        if(mixed[m_i] != undefined ){
            if(under_K.length != 0){
                if(under_K.at(-1) < mixed[m_i]){
                    n1 = under_K.pop()
                }
                else{
                    n1 = mixed[m_i]
                    ++m_i
                }
            }
            else{
                n1 = mixed[m_i]
                ++m_i
            }
        }
        else{
            if(under_K.length != 0){
                n1 = under_K.pop()
            }
            else{
                break;
            }
        }
        if(mixed[m_i] != undefined ){
            if(under_K.length != 0){
                if(under_K.at(-1) < mixed[m_i]){
                    n2 = under_K.pop()
                }
                else{
                    n2 = mixed[m_i]
                    ++m_i
                }
            }
            else{
                n2 = mixed[m_i]
                ++m_i
            }
        }
        else{
            if(under_K.length != 0){
                n2 = under_K.pop()
            }
            else{
                ++cnt
                break;
            }
        }

        if(n1+n2*2 < K){
            mixed.push(n1+n2*2)
        }
        else{
            flag = 1 
        }
       ++cnt
    }
    //if(mixed != [])
    /*
    가진 음식 스코빌을 하나씩 지우고 
    새로운 음식 스코빌을 하나씩 추가해서 arr에 K보다 작으면 저장하기
    두개의 배열을 다르게 유지해서 
    가진읍식과 새로운 음식중 작은 것들 부터 먼저 n1,n2로 만든다
    가진음식, 새로운 음식의 index가 합쳐서 1이라면 return 하기 그리고  flag ==1 이라면 ++cnt 해주고 끝내기 flag == 0 이라면 -1로 끝내기 
    */
    if(flag == 1){
        return cnt 
    }
    else{

        return -1
    }
}