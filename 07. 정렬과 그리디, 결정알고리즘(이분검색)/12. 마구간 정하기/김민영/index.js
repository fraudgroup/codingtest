function solution(c, stable) {
  stable.sort((a, b) => a - b);

  let start = 1;
  let end = stable[stable.length - 1] - stable[0];
  let answer = 0;

  const canPlaceHorses = (distance) => {
    let count = 1;
    let lastPosition = stable[0];

    for (i = 1; i < stable.length; i++) {
      if (stable[i] - lastPosition >= distance) {
        count++;
        lastPosition = stable[i];

        if (count >= c) return true;
      }
    }

    return false;
  };

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (canPlaceHorses(mid)) {
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
