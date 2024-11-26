function solution(meeting) {
  let answer = 0;
  let endTime = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  for (let [start, end] of meeting) {
    if (start >= endTime) {
      answer++;
      endTime = end;
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

let arr1 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr1));