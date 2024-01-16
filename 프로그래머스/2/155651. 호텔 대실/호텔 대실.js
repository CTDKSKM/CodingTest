function solution(book_time) {
    // 주의: 디스트럭쳐링 남발합니다..

    // 먼저 이폵 으로 바꿔줄게요, 삶이 엄청나게 쉬워집니다.. (개고생하고 옴..)
    const epochs = book_time.map(v => {
        const [[h1, m1], [h2, m2]] = v.map(v2 => v2.split`:`)

        // 각 시/분으로 이폵 구하기, 연 월 일은 아무거나 상관 없으니
        // 컴퓨터가 좋아하는 2의 제곱으로..! (헛소리)
        return [new Date(2048, 2, 2, h1, m1).getTime(),
                new Date(2048, 2, 2, h2, m2).getTime()]
    });

    epochs.sort(); // 소트해줍니다, 이건 in place 오퍼레이터죠!

    const rooms = []; // 방리스트를 만듭니다
    for (const [start, end] of epochs){
        // 부킹의 끝나고 청소 끝난 시간을:
        //     1) 새 방이 필요하면, 방리스트에 추가
        //     2) 방리스트 속 헌 방 중에 빈 방이 있으면, 그 방에 업데이트

        // 엔드타임 설정합니다 (10분 더하기)
        // 10분 = 600,000 밀리초 = 공다섯개 6e5
        let endTime = end + 6e5; 

        // 먼저 방리스트 돌고, 도저히 빈방이 없으면 방을 새로 찾도록 합니다 
        for (const room of rooms){
            // 사용중인 방의 엔드타임이 시작시간보다 미래에 있으면 방해하지말고..
            if (room.endTime > start) continue;

            // 엔드타임이 같거나 더 과거에 있으면, 이 방에 새로온 손님을 넣습니다
            room.endTime = endTime;

            endTime = 0; // 이건 별거 아니고 요 뤂 밖에서 이 부킹 처리됐나 확인하려고 해봤습니다
                         // 라벨 & 고투 할 수 있는데, 라벨 아무도 안쓰니 ...
                         // 아예 새로운 변수를 갖고 체크해줘도 되겠죠!
            break;
        }
        if(!endTime) continue; // 처리가 되었었으니 다음 부킹 고고

        rooms.push({ endTime }); // 온 세상에 사랑이 넘쳐나니 어쩔수 없이 새로운 방을 준비해드립니다
    }

    return rooms.length;
}