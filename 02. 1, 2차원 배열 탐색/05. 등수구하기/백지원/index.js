function solution(arr) {
  let answer = [];
  let sortedScores = [...arr].sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    const rank = sortedScores.indexOf(arr[i]) + 1;
    answer.push(rank);
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
