function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  const DFS= (index, path) => {
    const sum = path.reduce((acc, cur) => acc + cur, 0);
    if (sum <= c) {
      answer = Math.max(answer, sum);
    }

    for(let i = index; i < arr.length; i++) {
      DFS(i + 1, path.concat(arr[i]))
    }
  }

  DFS(0, []);

  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));