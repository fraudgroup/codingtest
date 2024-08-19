function solution(times) {
  times.sort((a, b) => a[1] - b[1] || a[0] - b[1]);

  let answer = Number.MIN_SAFE_INTEGER;
  let people = 0;
  let endTime = times[0][1];

  for (const [start, end] of times) {
    if (endTime > start) {
      people++;
      answer = Math.max(answer, people);
      continue;
    }

    people--;
    endTime = end;
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
