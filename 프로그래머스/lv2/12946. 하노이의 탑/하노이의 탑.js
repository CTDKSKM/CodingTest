function solution(number) {
    var answer = [];
        for(var n=1;n<=number;n++){
        var arr=[[]];
        if(n%2==1){
            arr[0]=[1,3];
        }
        else{
            arr[0]=[1,2];
        }
        for(var i=1;i<((Math.pow(2,n)-1)-(Math.pow(2,n-1)-1));i++){
            var arr123=[1,2,3];
            arr123.splice(arr123.indexOf(arr[i-1][0]),1);
            arr123.splice(arr123.indexOf(arr[i-1][1]),1);
            arr[i]=[arr[i-1][1],arr123[0]];
        }
        var basket=[];
        for(var i=0;i<answer.length;i++){basket[i]=answer[i];}
        for(var i=0;i<(Math.pow(2,n)-1);i++){//껴넣기
            if(i%2==0){
                answer[i]=arr[0];
                arr=arr.slice(1,arr.length);
            }
            else{
                answer[i]=basket[0];
                basket=basket.slice(1,basket.length);
            }
        }
        }//for number
        return answer;
}