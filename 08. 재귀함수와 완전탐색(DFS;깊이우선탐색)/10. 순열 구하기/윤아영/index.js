function solution(m, arr) {
  let answer = [];

  const DFS = (array, restArray) => {
    if (array.length === m) {
      answer.push(array);
      return;
    }
    
    for (let i = 0; i < restArray.length; i++) {
      DFS([...array, restArray[i]], [...restArray.slice(0, i), ...restArray.slice(i + 1)]);
    }
  };

  DFS([], arr);

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }

  return answer.length;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
