function solution(arr) {
  let answer = [];

  arr.forEach((el1) => {
    let rank = 1;

    arr.forEach((el2) => {
      el1 < el2 && rank++;
    });

    answer.push(rank);
  });

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
