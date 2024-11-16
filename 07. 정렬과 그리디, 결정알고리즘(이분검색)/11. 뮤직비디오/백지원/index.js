function solution(m, songs) {
  let answer;
  let start = Math.max(...songs);
  let end = songs.reduce((a, b) => a + b, 0);

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    let dvdCnt = 1;
    let currentSum = 0; // 현재 DVD에 담긴 곡들의 합

    for (let song of songs) {
      if (currentSum + song > mid) {
        // 현재 DVD에 더 담을 수 없으면 새 DVD 추가
        dvdCnt++;
        currentSum = song;
      } else {
        currentSum += song;
      }
    }

    if (dvdCnt <= m) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
