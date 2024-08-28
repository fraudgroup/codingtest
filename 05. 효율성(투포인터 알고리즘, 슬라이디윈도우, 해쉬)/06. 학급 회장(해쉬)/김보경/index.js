function solution(s) {
  let answer;
  let countResults = {};

  [...s].forEach((el) => {
    if (el in countResults) {
      countResults[el]++;
    } else {
      countResults[el] = 1;
    }
  });

  let maxValue = 0;
  for (let key in countResults) {
    if (countResults[key] > maxValue) {
      maxValue = countResults[key];
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
