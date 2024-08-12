function solution(need, plan) {
  let answer = [];
  let needIndex = 0;
  const isNeedCourse = (el) => el === need[needIndex];

  [...plan].forEach((el) => {
    if (isNeedCourse(el)) {
      answer.push(needIndex);
      needIndex++;
    }
  });
  return answer.length === need.length &&
    answer.every((val, index) => val === index)
    ? "YES"
    : "NO";
}

let a = "CBA";
let b = "CBDGAE";
console.log(solution(a, b));
