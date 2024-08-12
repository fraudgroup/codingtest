function solution(n, k) {
  const princes = Array.from({ length: n }, (_, i) => i + 1);

  while (princes.length !== 1) {
    for (let i = 0; i < k - 1; i++) {
      princes.push(princes.shift());
    }

    princes.shift();
  }

  return princes[0];
}

console.log(solution(8, 3));
