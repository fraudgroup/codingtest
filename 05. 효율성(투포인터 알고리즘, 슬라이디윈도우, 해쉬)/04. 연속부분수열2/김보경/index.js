function solution(m, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumStack = arr[i];
    if (sumStack > m) break;
    if (sumStack === m) {
      answer++;
      break;
    } else if (sumStack < m) {
      answer++;
    }

    for (let j = i + 1; j < arr.length; j++) {
      sumStack = sumStack + arr[j];

      if (sumStack > m) break;
      if (sumStack === m) {
        answer++;
        break;
      } else if (sumStack < m) {
        answer++;
      }
    }
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
