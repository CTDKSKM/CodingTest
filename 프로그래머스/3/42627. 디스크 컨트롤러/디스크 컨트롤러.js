class Heap {
  constructor() {
    this.heap = [];
  }

  getSize() {
    return this.heap.length;
  }
  getLeftIdx(node) {
    return node * 2 + 1;
  }
  getRightIdx(node) {
    return node * 2 + 2;
  }
  getParentIdx(node) {
    return parseInt((node - 1) / 2);
  }
  swap(x, y) {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
  }
  bubbleUp() {
    let target = this.getSize() - 1;
    let parentIdx = this.getParentIdx(target);
    while (this.heap[target][1] < this.heap[parentIdx][1]) {
      this.swap(target, parentIdx);
      target = parentIdx;
      parentIdx = this.getParentIdx(target);
    }
  }
  bubbleDown() {
    let target = 0;
    let leftIdx = this.getLeftIdx(target);
    let rightIdx = this.getRightIdx(target);
    while (
      (this.heap[leftIdx] && this.heap[target][1] > this.heap[leftIdx][1]) ||
      (this.heap[rightIdx] && this.heap[target][1] > this.heap[rightIdx][1])
    ) {
      let small = leftIdx;
      if (this.heap[rightIdx] && this.heap[small][1] > this.heap[rightIdx][1]) {
        small = rightIdx;
      }
      this.swap(target, small);
      target = small;
      leftIdx = this.getLeftIdx(target);
      rightIdx = this.getRightIdx(target);
    }
  }

  pushItem(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  shiftItem() {
    if (this.getSize() === 0) return null;
    if (this.getSize() === 1) return this.heap.pop();
    let temp = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return temp;
  }
}
function solution(jobs) {
  const heap = new Heap();
  jobs = jobs.sort((a, b) => (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]));
  let totalJobs = jobs.length;
  let done = 0;
  let temp = [];
  let current = 0;
  while (done < totalJobs) {
    while (jobs[0] && current >= jobs[0][0]) {
      heap.pushItem(jobs.shift());
    }
    if (heap.getSize()) {
      let [startTime, cost] = heap.shiftItem();
      temp.push(current + cost - startTime);
      current += cost;
      done++;
    } else {
      current++;
    }
  }
  return parseInt(temp.reduce((a, b) => a + b) / temp.length);
}