const count = (songs, length) => {
  let count = 1;
  let sum = 0;

  for (const song of songs) {
    if (sum + song > length) {
      count++;
      sum = song;
      continue;
    }

    sum += song;
  }

  return count;
};

function solution(m, songs) {
  let answer;
  let left = Math.max(...songs);
  let right = songs.reduce((acc, cur) => acc + cur, 0);

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (count(songs, middle) <= m) {
      answer = middle;
      right = middle - 1;
      continue;
    }

    left = middle + 1;
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
