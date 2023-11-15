class MinHeap {
    constructor() {
        this.heap = [null];
    }

    push(val) {
        this.heap.push(val);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop(isTopPop) {
        if (this.isEmpty()) return;
        if (this.heap.length === 2) return this.heap.pop();
        if (!isTopPop) {
            const parentIndex = Math.floor((this.heap.length - 1) / 2);
            const lastLeaf = this.heap.slice(parentIndex);
            const max = Math.max(...lastLeaf);
            this._swap(parentIndex + lastLeaf.indexOf(max), this.heap.length - 1);
            return this.heap.pop();
        }

        const val = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        while (
            this.heap[leftIndex] && this.heap[currentIndex] > this.heap[leftIndex] ||
            this.heap[rightIndex] && this.heap[currentIndex] > this.heap[rightIndex] 
        ) {
            if (this.heap[leftIndex] === undefined) {
                this._swap(rightIndex, currentIndex);
            } else if (this.heap[rightIndex] === undefined) {
                this._swap(leftIndex, currentIndex);
            } else if (this.heap[leftIndex] > this.heap[rightIndex]) {
                this._swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
            } else if (this.heap[leftIndex] <= this.heap[rightIndex]) {
                this._swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
            }

            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }

        return val;
    }

    isEmpty() {
        return this.heap.length === 1;
    }

    result() {
        if (this.heap.length === 1) return [0, 0];
        if (this.heap.length === 2) return [this.heap[1] ,this.heap[1]];
        const parentIndex = Math.floor((this.heap.length - 1) / 2);
        const lastLeaf = this.heap.slice(parentIndex);
        const max = Math.max(...lastLeaf);
        return [max, this.heap[1]];
    }

    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

function solution(arg) {
    var list = [];
    arg.forEach(t=>{
        if(t[0] === 'I'){
            list.push(+(t.split(" ")[1]));            
        }
        else{
            if(!list.length) return;

            var val = (t[2] === '-' ? Math.min : Math.max)(...list);
            var delIndex = list.findIndex(t=> t ===  val);

            list.splice(delIndex, 1);
        }
    })

    return list.length ? [Math.max(...list), Math.min(...list)] : [0, 0];
}