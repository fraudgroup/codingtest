function solution(times) {
  let answer = 0;
  let preEnd = 0;
  let currentPeople = 0;

  const sortedTimes = times.sort((a, b) => a[0] - b[0]);

  sortedTimes.forEach((time) => {
    const [start, end] = time;
    if (start >= preEnd - 1) {
      currentPeople = 1;
    } else {
      currentPeople += 1;
    }
    preEnd = end;
    answer = Math.max(answer, currentPeople);
  });

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
