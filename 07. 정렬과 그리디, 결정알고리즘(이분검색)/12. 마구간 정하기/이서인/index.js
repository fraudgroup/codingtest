function count(positions, distance) {
  let cnt = 1;
  let lastPosition = positions[0];
  for (let i = 1; i < positions.length; i++){
    if (positions[i] - lastPosition >= distance) {
      cnt++;
      lastPosition = positions[i]
    }
  }
  return cnt;
}

function solution(c, stable) {
  stable.sort((a, b) => a - b)
  let answer = 0;
  let start = 1;
  let end = stable[stable.length - 1]
  
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
