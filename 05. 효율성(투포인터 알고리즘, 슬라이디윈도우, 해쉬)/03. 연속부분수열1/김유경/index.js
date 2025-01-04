function solution(m, arr) {
  let start = 0;
  let end = 0;
  let currentSum = 0;
  let count = 0;

  while (end < arr.length) {
    // 윈도우 확장: end 포인터의 값을 더함
    currentSum += arr[end];

    // 현재 합이 m을 초과하면 윈도우를 축소
    while (currentSum > m && start <= end) {
      currentSum -= arr[start];
      start += 1;
    }

    // 현재 합이 정확히 m이라면 카운트를 증가
    if (currentSum === m) {
      count += 1;
    }

    // end 포인터를 이동하여 윈도우를 확장
    end += 1;
  }

  return count;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
