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

// 다른 풀이 추가
const solution2 = (s) => {
  let answer;
  let table = new Map();

  [...s].forEach((el) => {
    if (table.has(el)) {
      table.set(el, table.get(el) + 1);
    } else {
      table.set(el, 1);
    }
  });

  let max = 0;
  for (let [key, val] of table) {
    if (max < val) {
      max = val;
      answer = key;
    }
  }

  return answer;
};

let str = "BACBACCACCBDEDE";
console.log(solution(str));
console.log(solution2(str));
