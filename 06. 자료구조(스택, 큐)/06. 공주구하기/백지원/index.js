function solution(n, k) {
  const queue = [];
  // for문 대신 (i=요소의 인덱스)
  // const queue = new Array(n).fill(0).map((_, i) => i + 1);

  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  while (queue.length > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }
  return queue[0];
}

console.log(solution(8, 3));
