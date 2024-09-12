function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  let tH = new Map();

  [...t].forEach((el) => {
    sH.set(el, (tH.get(el) || 0) - 1);
  });
  console.log(sH);

  let len = t.length - 1;
  for (let rt = 0; rt < len; rt++) {
    sH.set(s[rt], (sH.get(s[rt]) || 0) + 1);
    if (sH.get(s[rt]) === 0) {
      sH.delete(s[rt]);
    }
  }

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    sH.set(s[rt], (sH.get[rt] || 0) + 1);
    if (sH.get(s[rt]) === 0) sH.delete(s[rt]);
    if (sH.size === 0) answer++;
    sH.set(s[lt], (sH.get(s[lt]) || 0) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
