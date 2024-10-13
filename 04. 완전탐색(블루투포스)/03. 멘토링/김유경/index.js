function countMentoringPairs(N, M, testResults) {
  let count = 0;

  // 학생 간 가능한 모든 짝을 확인
  for (let mentor = 1; mentor <= N; mentor++) {
    for (let mentee = 1; mentee <= N; mentee++) {
      if (mentor === mentee) continue;
      let validPair = true;
      console.log(mentor, mentee);

      // 각 시험에서 mentor가 mentee보다 등수가 앞서는지 확인
      for (let i = 0; i < M; i++) {
        let mentorRank = testResults[i].indexOf(mentor);
        let menteeRank = testResults[i].indexOf(mentee);

        if (mentorRank >= menteeRank) {
          validPair = false;
          break;
        }
      }

      // 조건을 만족하면 count 증가
      if (validPair) count++;
    }
  }

  return count;
}

// 입력 예제
const N = 4;
const M = 3;
const testResults = [
  [3, 1, 4, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(countMentoringPairs(N, M, testResults)); // 출력: 3
