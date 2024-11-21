function solution(c, stable) {
  stable.sort((a, b) => a - b);

  let start = 1;
  end = stable[stable.length - 1] - stable[0];
  let answer = 0;

  // 주어진 거리 d로 c마리 말을 배치할 수 있는지 확인하는 함수
  function canPlaceHorses(d) {
    let count = 1; // 첫 번째 말 배치
    let lastPosition = stable[0]; // 첫 번째 말의 위치

    // 두 번째 마구간 부터 반복
    for (let i = 1; i < stable.length; i++) {
      if (stable[i] - lastPosition >= d) {
        count++; // 말 배치
        lastPosition = stable[i]; // 마지막 배치된 위치 갱신
        if (count === c) return true;
      }
    }

    return false; // 배치 불가능
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (canPlaceHorses(mid)) {
      answer = mid;
      start = mid + 1; // 최대니까 더 큰 거리 탐색
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
