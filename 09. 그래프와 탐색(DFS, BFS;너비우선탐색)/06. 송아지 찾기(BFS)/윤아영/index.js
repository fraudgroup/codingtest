function solution(s, e) {
  let answer = 0;
  const ch = new Array(10001).fill(0);
  const queue = [];
  let depth = 0;
  queue.push(s);
  ch[s] = 1;

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const v = queue.shift();
      for (let nv of [v - 1, v + 1, v + 5]) {
        if (nv === e) return depth + 1;
        if (nv > 0 && nv <= 10000 && ch[nv] === 0) {
          ch[nv] = 1;
          queue.push(nv);
        }
      }
    }

    depth++;
  }

  return answer;
}

console.log(solution(5, 14));
console.log(solution(8, 3));
