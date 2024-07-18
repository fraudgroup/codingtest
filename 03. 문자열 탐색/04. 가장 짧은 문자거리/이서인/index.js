function solution(s, t) {
  const L = s.length;
  const distances = new Array(L).fill(Infinity);

  let lastPosition = -Infinity;
  for (let i = 0; i < L; i++) {
    if (s[i] === t) {
      lastPosition = i;
    }
    distances[i] = i - lastPosition;
  }

  lastPosition = Infinity;
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
