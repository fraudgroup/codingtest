function solution(m, songs) {
  let answer = 0;
  let left = Math.max(...songs);
  let right = songs.reduce((a, b) => a + b, 0);

  const countDVDs = (capacity) => {
    let count = 1;
    let sum = 0;

    for (let song of songs) {
      if (sum + song > capacity) {
        count++;
        sum = song;
      } else {
        sum += song;
      }
    }

    return count;
  };

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (countDVDs(mid) <= m) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
