function solution(progresses, speeds) {
    const length = progresses.length;
  let answer = [],
    i = 0,
    t = 0,
    numberOfReleases = 0;

  while (i < length) {
    numberOfReleases = 1;
    t = Math.ceil((100 - progresses[i]) / speeds[i++]);

    while (progresses[i] + speeds[i] * t > 99) {
      numberOfReleases++;
      i++;
    }
    answer.push(numberOfReleases);
  }

  return answer;
}