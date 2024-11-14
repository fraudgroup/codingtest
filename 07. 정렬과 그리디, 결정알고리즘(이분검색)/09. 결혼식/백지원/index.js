function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let currentCnt = 0;
  const sortTimes = times.sort((a, b) => a[0] - b[0]);

  // 친구가 도착하면 +1, 떠나면 -1
  // 모든 친구의 도착 시간과 떠나는 시간이 섞여서 저장됨
  let timeline = [];
  for (let [start, end] of times) {
    timeline.push([start, 1]);
    timeline.push([end, -1]);
  }
  timeline.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  for (let [time, type] of timeline) {
    currentCnt += type;
    answer = Math.max(answer, currentCnt);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
