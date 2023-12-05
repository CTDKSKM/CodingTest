function solution(numbers) {
    return numbers.map((x)=>{
        if(x&1) {
            var binary = ["0", ...x.toString(2).split("")];
            for(var i = binary.length-1; i >= 0; i--) {
                if(binary[i] == "0") {
                    binary[i] = "1";
                    binary[i+1] = "0";
                    break;
                }
            }
            return parseInt(binary.join(""), 2);
        } else {
            return x+1;
        }
    });
}