function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  
  function DFS(index, currentTime, currentScore) {

    if (currentTime > m) return;

    answer = Math.max(answer, currentScore)

    if (index === pt.length) return;

    DFS(index + 1, currentTime + pt[index], currentScore + ps[index])
    DFS(index + 1, currentTime, currentScore)
  }

  DFS(0, 0, 0)

  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
