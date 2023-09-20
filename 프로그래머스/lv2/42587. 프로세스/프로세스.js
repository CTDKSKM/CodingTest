function solution(priorities, location) {
    var list = priorities.map((t,i)=>({
        isAnswer : i === location,
        val : t
    }));
    var count = 0;        
    while(true){
        var cur = list.shift();        
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.isAnswer) return count;
        }
    }
}