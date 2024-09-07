function solution(arr) {
  let sortArr = [...arr].sort((a, b) => b - a);
  let answer = [];

  for (i = 0; i < arr.length; i++) {
    answer.push(sortArr.indexOf(arr[i]) + 1);
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
let arr1 = [83, 92, 78, 92, 92]
console.log(solution(arr));
console.log(solution(arr1));
