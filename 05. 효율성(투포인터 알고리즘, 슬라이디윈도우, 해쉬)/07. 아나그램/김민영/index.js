function solution(str1, str2) {
  let answer = 'YES';

  let aMap = new Map();
  let bMap = new Map();

  for (x of str1) {
    if (aMap.has(x)) {
      aMap.set(x, aMap.get(x) + 1)
    } else {
      aMap.set(x, 1)
    }
  }

  for (y of str2) {
    if (bMap.has(y)) {
      bMap.set(y, bMap.get(y) + 1)
    } else {
      bMap.set(y, 1)
    }
  }

  for ([key, value] of aMap) {
    if (value !== bMap.get(key)) {
      answer = 'NO'
      break;
    }
  }

  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));

let a1 = 'abaCC';
let b1 = 'Caaab';
console.log(solution(a1, b1));
