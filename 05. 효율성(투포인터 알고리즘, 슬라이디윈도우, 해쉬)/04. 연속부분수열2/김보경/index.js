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

// 다른 풀이 추가 - 투포인터
const solution2 = (m, arr) => {
  let answer = 0;

  let lt = 0;
  let sum = 0;

  /*
    m이하가 되는 경우의 수는 rt - lt + 1로 계산함
  */
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }

  return answer;
};

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
console.log(solution2(5, a));
