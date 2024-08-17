function solution(m, songs) {
  let answer = 0;
  let start = Math.max(...songs);
  let end = arr.reduce((a, b) => a + b, 0);
  let DVD = [];

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let sum = 0;
    let count = 1;

    songs.forEach((song) => {
      if (sum + song > mid) {
        DVD.push(sum);
        count += 1;
        sum = song;
      } else {
        sum += song;
      }
    });

    DVD.push(sum);

    if (m === count) {
      answer = Math.max(...DVD);
      break;
    } else if (m > count) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    DVD = [];
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
