function solution() {
    const queue = [];
    let answer = ''
    queue.push(1)

  while (queue.length) {
    console.log(queue);
      let v = queue.shift()
    answer += v + "";
    for (let newv of [v * 2, v * 2 + 1]) {
      if (newv > 7) continue;
      queue.push(newv)
    }
  }
  return answer
  }
console.log(solution());
