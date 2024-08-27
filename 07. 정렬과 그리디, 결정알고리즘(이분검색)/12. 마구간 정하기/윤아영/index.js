const count = (stable, space) => {
  let count = 1;
  let currentPoint = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - currentPoint >= space) {
      count++;
      currentPoint = stable[i];
    }
  }

  return count;
};

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let left = stable[0];
  let right = stable[stable.length - 1];

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (count(stable, middle) >= c) {
      answer = middle;
      left = middle + 1;
      continue;
    }

    right = middle - 1;
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
