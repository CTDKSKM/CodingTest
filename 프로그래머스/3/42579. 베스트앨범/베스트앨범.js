function solution(genres, plays) {
    const answer = [];

    const genreMap = {};
    const indexMap = {};

    genres.forEach((genre, index) => {
        if (genreMap[genre]) {
            genreMap[genre].sum += plays[index];
            genreMap[genre].cnt += 1;
        } else {
            genreMap[genre] = { sum: plays[index], cnt: 1 };
        }

        if (indexMap[genre]) {
            indexMap[genre].push({ num: plays[index], index });
        } else {
            indexMap[genre] = [{ num: plays[index], index }];
        }
    });

    for (const genre in indexMap) {
        indexMap[genre].sort((a, b) => {
            if (a.num === b.num) {
                return b.index - a.index
            }
            else return a.num - b.num
        });
    }

    const sortedGenres = Object.entries(genreMap)
        .sort((a, b) => b[1].sum - a[1].sum);

    sortedGenres.forEach(([genre]) => {
        answer.push(indexMap[genre].pop().index);
        if (indexMap[genre].length > 0) {
            answer.push(indexMap[genre].pop().index);
        }
    });

    return answer 
}

/*

장르별로 가장 많이 재생된 노래 두개씩 모아 베스트 앨범 출시.
고유 번호로 구분 index-재생횟수.
속한 노래가 많이 재생된 장르를 먼저 수록
장르 내에서 많이 재생된 노래 먼저 수록
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록

*/