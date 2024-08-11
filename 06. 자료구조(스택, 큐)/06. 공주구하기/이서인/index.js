function solution(n, k) {
  const princes = Array.from({ length: n }, (_, index) => index + 1);
  let excludeIndex = 0;

  while (princes.length > 1) {
    excludeIndex = (excludeIndex + k - 1) % princes.length;
    princes.splice(excludeIndex, 1);
  }

  return princes[0];
}

console.log(solution(8, 3));
