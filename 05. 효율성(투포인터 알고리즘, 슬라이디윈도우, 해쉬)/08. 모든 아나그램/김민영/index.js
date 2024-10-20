function solution(s, t) {
  let answer = 0;
  let tMap = new Map();

  for (x of t) {
    if (tMap.has(x)) {
      tMap.set(x, tMap.get(x) + 1)
    } else {
      tMap.set(x, 1)
    }
  }

  for (i = 0; i <= s.length - tMap.size; i++) {
    let sMap = new Map();
    let str = s.substr(i, tMap.size)

    for (y of str) {
      if (sMap.has(y)) {
        sMap.set(y, sMap.get(y) + 1)
      } else {
        sMap.set(y, 1)
      }
    }

    let cnt = 0;

    for ([key, value] of sMap) {
      if (value !== tMap.get(key)) {
        break;
      }

      cnt += 1;

      if (cnt === tMap.size) {
        answer += 1;
      }
    }
  }

  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
