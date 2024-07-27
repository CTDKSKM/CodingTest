class BST {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    
    insert(val) {
        if (val.x < this.val.x) {
            if (this.left === null) {
                this.left = new BST(val);
            }
            else {
                this.left.insert(val);
            }
        }
        else if (val.x > this.val.x) {
            if (this.right === null) {
                this.right = new BST(val);
            }
            else {
                this.right.insert(val);
            }
        }
    }
    
    preorder(callback) {
        callback(this.val);
        if (this.left) {
            this.left.preorder(callback);
        }
        if (this.right) {
            this.right.preorder(callback);
        }
    }
    
    postorder(callback) {
        if (this.left) {
          this.left.postorder(callback);
        };
        if (this.right) {
          this.right.postorder(callback);
        };
        callback(this.val);
    }
}

function solution(nodeinfo) {
    const ans = [[],[]];
    
    nodeinfo = nodeinfo.map(([x,y], idx) => ({x,y,num:idx+1}));
    nodeinfo.sort((a,b) => (b.y - a.y || a.x - b.x));
    
    const root = new BST(nodeinfo[0])
    
    for(let i=1; i < nodeinfo.length; i++) root.insert(nodeinfo[i]);
    
    root.preorder((val) => ans[0].push(val.num))
    root.postorder((val) => ans[1].push(val.num))
    
    return ans;
}