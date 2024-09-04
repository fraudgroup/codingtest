function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;

  const DFS = (index, scores, times) => {
    const timesSum = times.reduce((acc, cur) => acc + cur, 0);

    if (timesSum > m) {
      return true;
    }

    const scoresSum = scores.reduce((acc, cur) => acc + cur, 0);
    answer = Math.max(answer, scoresSum);

    for (let i = index; i < ps.length; i++) {
      if (DFS(i + 1, [...scores, ps[i]], [...times, pt[i]])) {
        continue;
      }
    }
  };

  DFS(0, [], []);

  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
