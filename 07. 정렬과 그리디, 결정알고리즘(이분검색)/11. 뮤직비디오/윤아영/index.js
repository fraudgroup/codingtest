const count = (songs, length) => {
  let tracks = 1;
  let lengthOfSongs = 0;

  for (let i = 0; i < songs.length; i++) {
    lengthOfSongs += songs[i];

    if (lengthOfSongs > length) {
      tracks++;
      lengthOfSongs = songs[i];
    }
  }

  return tracks;
};

function solution(m, songs) {
  let answer = Number.MAX_SAFE_INTEGER;
  let left = Math.max(...songs);
  let right = songs.reduce((acc, cur) => acc + cur, 0);

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (count(songs, middle) > m) {
      left = middle + 1;
      continue;
    }

    right = middle - 1;
    answer = Math.min(answer, middle);
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
