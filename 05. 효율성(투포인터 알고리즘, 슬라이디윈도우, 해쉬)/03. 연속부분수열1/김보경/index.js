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

// 다른 풀이 추가 - 투포인터
const solution2 = (m, arr) => {
  let answer = 0;

  let lt = 0;
  let rt = 0;
  let sum = 0;

  while (rt < arr.length) {
    if (sum < m) {
      sum += arr[rt++];
    } else if (sum === m) {
      answer++;
      sum -= arr[lt++];
    } else {
      sum -= arr[lt++];
    }
  }

  return answer;
};

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
console.log(solution2(6, a));
