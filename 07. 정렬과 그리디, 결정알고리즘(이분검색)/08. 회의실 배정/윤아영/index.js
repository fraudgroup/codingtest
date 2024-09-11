function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  for (let i = 0; i < meeting.length; i++) {
    const schedule = [];
    let time = null;

    if (meeting.length - i < answer) {
      break;
    }

    for (let j = i; j < meeting.length; j++) {
      const [start, end] = meeting[j];
      if (!time || start === time) {
        time = end;
        schedule.push(meeting[j]);
      }
    }

    answer = Math.max(answer, schedule.length);
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
let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
console.log(solution(arr2));
