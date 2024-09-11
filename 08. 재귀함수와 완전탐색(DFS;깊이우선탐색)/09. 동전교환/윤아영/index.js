function solution(m, arr) {
  arr.sort((a, b) => b - a);
  let answer = 0;
  let money = m;

  for (let i = 0; i < arr.length; i++) {
    if (!money) break;

    answer += Math.floor(money / arr[i]);
    money %= arr[i];
  }

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
