function solution(scores) {
  const n = scores.length;
  const wanho = scores[0];

  const peerMaxTable = scores.reduce((prev, [work, peer]) => {
    if (!prev[work]) prev[work] = peer;
    else prev[work] = Math.max(prev[work], peer);
    return prev;
  }, {});

  const peerMinTable = {};
  let prevMax = -1;
  Object.keys(peerMaxTable)
    .sort((a, b) => +b - +a)
    .forEach(work => {
      if (peerMaxTable[work] > prevMax) {
        peerMinTable[work] = prevMax;
        prevMax = peerMaxTable[work];
      } else {
        peerMinTable[work] = prevMax;
      }
    });

  const bonusPeer = [];
  for (let i = 0; i < n; i++) {
    if (scores[i][1] >= peerMinTable[scores[i][0]]) {
      bonusPeer.push(scores[i]);
    }
  }

  const rankPeer = bonusPeer
    .map(([work, peer]) => [work + peer, work, peer])
    .sort((a, b) => b[0] - a[0]);

  let rank = 0;
  let count = 0;
  let prev = -1;
  for (let i = 0; i < rankPeer.length; i++) {
    count++;
    if (prev !== rankPeer[i][0]) {
      rank = count;
      prev = rankPeer[i][0];
    }
    if (rankPeer[i][1] === wanho[0] && rankPeer[i][2] === wanho[1]) {
      return rank;
    }
  }

  return -1;
}