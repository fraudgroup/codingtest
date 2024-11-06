function solution(meeting) {
  let answer = 1;
  meeting.sort((a, b) => a[1] - b[1]);
  let beforeTime = meeting[0][1];
  for (let i = 1; i < meeting.length; i++) {
    if (meeting[i][0] >= beforeTime) {
      beforeTime = meeting[i][1];
      answer++;
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
