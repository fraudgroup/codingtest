function solution(m, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumStack = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (sumStack < m) {
        sumStack = sumStack + arr[j];
      } else if (sumStack === m) {
        answer++;
        break;
      } else {
        break;
      }
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
