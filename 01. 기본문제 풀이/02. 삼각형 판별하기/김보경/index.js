function solution(a, b, c) {
  let answer = "YES";

  let arr = [a, b, c];
  let maxValeu = Math.max(...arr);
  let result = arr.reduce((acc, el) => {
    return el !== maxValeu ? acc + el : acc;
  });

  return result > maxValeu ? answer : "NO";
}

console.log(solution(13, 33, 17));
