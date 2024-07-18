function solution(a, b, c) {
  let answer = "YES";

  let arr = [a, b, c];
  let maxValue = Math.max(...arr);
  let result = arr.reduce((acc, el) => {
    return el !== maxValue ? acc + el : acc;
  });

  return result > maxValue ? answer : "NO";
}

console.log(solution(13, 33, 17));
