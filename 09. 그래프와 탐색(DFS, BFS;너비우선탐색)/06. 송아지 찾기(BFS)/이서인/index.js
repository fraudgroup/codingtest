function solution(s, e) {
  const directions = [1, -1, 5];
  const visited = new Array(10001).fill(false);
  const queue = [];

  queue.push([s, 0]);
  visited[s] = true;

  while (queue.length) {
    const [current, jumps] = queue.shift();
    if (current === e) return jumps;

    for (let direction of directions) {
      const next = current + direction;
      if (next >= 0 && next <= 10000 && !visited[next]) {
        visited[next] = true;
        queue.push([next, jumps + 1]);
      }
    }
  }
}

console.log(solution(5, 14));
