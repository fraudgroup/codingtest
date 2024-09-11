function solution(size, arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer.includes(arr[i])) {
      answer = [arr[i], ...answer.filter((num) => num !== arr[i])];
      continue;
    }

    answer.unshift(arr[i]);
  }

  return answer.slice(0, size);
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
