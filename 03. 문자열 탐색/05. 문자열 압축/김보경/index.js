function solution(s) {
  let answer = [];

  let prevString = s[0];
  let count = 1;

  [...s].forEach((el, i) => {
    if (i === 0) return;

    if (el === prevString) {
      count++;
    } else {
      answer.push(prevString);

      if (count > 1) {
        answer.push(count);
        count = 1;
      }
    }

    prevString = el;
  });

  answer.push(prevString);
  if (count > 1) {
    answer.push(count);
  }

  return answer.join("");
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
