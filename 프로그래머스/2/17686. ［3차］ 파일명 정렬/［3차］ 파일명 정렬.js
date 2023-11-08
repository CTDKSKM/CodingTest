function solution(files) {
    function filename(){
        this.head = [];
        this.num = [];
        this.tail = [];
    }
    var answer = []; 
    var answer2=[];
    var i=0,j=0,sw=0
    var c=0,c1=0,c2=0;
    for(i=files.length-1;i>=0;i--){
        answer[i]=new filename;
        for(j=0;j<files[i].length;j++){
            if('0'<=files[i][j]&&files[i][j]<='9'){
                if(sw==0){
                    c1=j;
                    answer[i].head=files[i].slice(0,j);
                    sw=1;
                }
            }
            else if(sw==1){
                c2=j;
                answer[i].num=files[i].slice(c1,j);
                sw=2;
            }
        }
        if(sw==1)
            answer[i].num=files[i].slice(c1,j);
        if(sw==2)
            answer[i].tail=files[i].slice(c2,j);
        sw=0;
    }

    var tm = new filename;
    for(i=1;i<files.length;i++){
        for(j=0;j<files.length-i;j++){
            if(answer[j].head.toLowerCase()>answer[j+1].head.toLowerCase()){
                tm=answer[j+1];
                answer[j+1]=answer[j];
                answer[j]=tm;
            }
            else if(answer[j+1].head.toLowerCase()==answer[j].head.toLowerCase()){
                if(Number(answer[j].num)>Number(answer[j+1].num)){
                    tm=answer[j+1];
                    answer[j+1]=answer[j];
                    answer[j]=tm;
                }
            }
        }
    }

    //console.log(answer[2].head,answer[2].num,answer[2].tail);
    for(i=0;i<files.length;i++)
        answer2[i]=answer[i].head+answer[i].num+answer[i].tail;

    //console.log(files.sort(/*(a,b) => (a-b)*/));
    return answer2;
}
/*
단순한 문자 코드 순이 아닌, 파일명에 포함된 숫자를 반영한 정렬 기능을 저장소 관리 프로그램에 구현하기로

파일명은 100 글자 이내로, 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-")만으로 이루어져 있다. 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함

파일명은 크게 HEAD, NUMBER, TAIL의 세 부분으로 구성

HEAD는 숫자가 아닌 문자로 이루어져 있으며, 최소한 한 글자 이상

NUMBER는 한 글자에서 최대 다섯 글자 사이의 연속된 숫자로 이루어져 있으며, 앞쪽에 0이 올 수 있다. 0부터 99999 사이의 숫자로, 00000이나 0101 등도 가능

TAIL은 그 나머지 부분으로, 여기에는 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다.

우선 HEAD 부분을 기준으로 사전 순으로 정렬한다. 이때, 문자열 비교 시 대소문자 구분을 하지 않는다. MUZI와 muzi, MuZi는 정렬 시에 같은 순서로 취급

HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬한다. 9 < 10 < 0011 < 012 < 13 < 014 순으로 정렬된다. 숫자 앞의 0은 무시되며, 012와 12는 정렬 시에 같은 값으로 처리

HEAD 부분과, NUMBER의 숫자도 같을 경우, 원래 입력에 주어진 순서를 유지
*/