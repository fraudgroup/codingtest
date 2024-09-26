function solution(test) {
  let answer = 0;

  const N = test[0].length; // 학생 수 (테스트 결과의 길이)

  // 모든 학생 쌍을 고려
  for (let mentor = 1; mentor <= N; mentor++) {
    for (let mentee = 1; mentee <= N; mentee++) {
      if (mentor === mentee) continue; // 멘토와 멘티가 같으면 건너뛰기

      let isValid = true;

      // M개의 테스트 결과를 확인
      for (let i = 0; i < test.length; i++) {
        const mentorRank = test[i].indexOf(mentor) + 1; // 1-based index
        const menteeRank = test[i].indexOf(mentee) + 1; // 1-based index

        if (mentorRank >= menteeRank) {
          isValid = false;
          break; // 조건을 만족하지 않으면 중단
        }
      }

      if (isValid) answer++; // 조건을 만족하는 경우 카운트
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

