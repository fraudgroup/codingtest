function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);

  for (work of arr) {
    if (answer.includes(work)) {
      answer.splice(answer.indexOf(work), 1)
      answer.unshift(work);
    } else {
      answer.unshift(work);
      answer.pop();
    }
  }

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
