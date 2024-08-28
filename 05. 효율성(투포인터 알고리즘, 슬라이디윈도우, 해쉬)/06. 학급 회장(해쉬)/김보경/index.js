function solution(s) {
  let answer;
  let results = {};
  let maxValue = 0;

  [...s].forEach((el) => {
    if (el in results) {
      results[el]++;
    } else {
      results[el] = 1;
    }
  });

  for (let key in results) {
    if (results[key] > maxValue) {
      maxValue = results[key];
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
