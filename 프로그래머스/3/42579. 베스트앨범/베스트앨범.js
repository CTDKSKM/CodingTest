function solution(genres, plays) {
    var dic = {};
    genres.forEach((t,i)=> {
        dic[t] = dic[t] ?  dic[t] + plays[i] :plays[i];        
    });

    var dupDic = {};
    return genres          
          .map((t,i)=> ({genre : t, count:plays[i] , index:i}))
          .sort((a,b)=>{               
               if(a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
               if(a.count !== b.count) return b.count - a.count;
               return a.index - b.index;
           })
           .filter(t=>  {
               if(dupDic[t.genre] >= 2) return false;
               dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre]+ 1 : 1;
               return true;
            })
           .map(t=> t.index);    
}

/*

장르별로 가장 많이 재생된 노래 두개씩 모아 베스트 앨범 출시.
고유 번호로 구분 index-재생횟수.
속한 노래가 많이 재생된 장르를 먼저 수록
장르 내에서 많이 재생된 노래 먼저 수록
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록

*/