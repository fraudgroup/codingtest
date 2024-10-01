function solution() {
  let answer = "";
  const queue = [1];

  while (queue.length) {
    const v = queue.shift();
    answer += v + " ";
    for (const nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) break;
      queue.push(nv);
    }
  }

  return answer;
}

console.log(solution());
