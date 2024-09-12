function solution(str1, str2) {
  let answer = "YES";
  let str1Count = {};
  let str2Count = {};

  if (str1.length !== str2.length) return "NO";

  [...str1].forEach((el) => {
    if (el in str1Count) {
      str1Count[el]++;
    } else {
      str1Count[el] = 1;
    }
  });
  [...str2].forEach((el) => {
    if (el in str2Count) {
      str2Count[el]++;
    } else {
      str2Count[el] = 1;
    }
  });

  let str1Result = [];
  let str2Result = [];

  for (let key in str1Count) {
    let count = key + str1Count[key];
    str1Result.push(count);
  }
  for (let key in str2Count) {
    let count = key + str2Count[key];
    str2Result.push(count);
  }

  str1Result.sort().join("");
  str2Result.sort().join("");

  return str1Result.includes(str2Result) ? answer : "NO";
}

// 다른 풀이 추가
const solution2 = (str1, str2) => {
  let answer = "YES";
  let aTable = new Map();

  [...str1].forEach((el) => {
    if (aTable.has(el)) {
      aTable.set(el, aTable.get(el) + 1);
    } else {
      aTable.set(el, 1);
    }
  });

  [...str2].forEach((el) => {
    if (aTable.has(el)) {
      aTable.set(el, aTable.get(el) - 1);
    }
  });

  for (let [_, val] of aTable) {
    val > 0 ? (answer = "NO") : answer;
  }

  return answer;
};

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
console.log(solution2(a, b));
