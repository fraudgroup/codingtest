function solution(m, arr) {
  let answer = [];

  const DFS = (index, array) => {
    if (array.length === m) {
      answer.push(array);
      return;
    }

    for(let i = index; i < arr.length; i++) {
      DFS(i + 1, [...array, arr[i]]);
    }
  }

  DFS(0, []);

  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
