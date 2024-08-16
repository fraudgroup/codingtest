function solution(meeting) {
  let answer = 0;
  let preEnd = 0;

  const sortedArr = meeting.sort((a, b) =>
    a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]
  );

  sortedArr.forEach((time) => {
    const [start, end] = time;
    if (start >= preEnd) {
      preEnd = end;
      answer++;
    }
  });

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
