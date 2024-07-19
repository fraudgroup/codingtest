function solution(s, t) {
  const L = s.length;
  const distances = new Array(L).fill(L);

  let lastPosition = -L;
  for (let i = 0; i < L; i++) {
    if (s[i] === t) {
      lastPosition = i;
    }
    distances[i] = i - lastPosition;
  }

  lastPosition = -L;
  for (let i = L - 1; i >= 0; i--) {
    if (s[i] === t) {
      lastPosition = i;
    }
    distances[i] = Math.min(distances[i], lastPosition - i);
  }

  return distances;
}

let str = "teachermode";
console.log(solution(str, "e").join(" "));
