function solution(test) {
  const S = test[0].length;
  const T = test.length;
  let answer = 0;

  let rankings = Array.from({ length: T }, () => Array(S));

  test.forEach((testResult, testIndex) => {
    testResult.forEach((student, rankIndex) => {
      rankings[testIndex][student - 1] = rankIndex + 1;
    });
  });
  for (let mentor = 0; mentor < S; mentor++) {
    for (let mentee = 0; mentee < S; mentee++) {
      if (mentor !== mentee) {
        let isValidPair = true;
        for (let testIndex = 0; testIndex < T; testIndex++) {
          if (rankings[testIndex][mentor] >= rankings[testIndex][mentee]) {
            isValidPair = false;
            break;
          }
        }
        if (isValidPair) {
          answer++;
        }
      }
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
