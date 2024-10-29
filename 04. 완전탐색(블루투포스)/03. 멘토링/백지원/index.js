function solution(test) {
  let answer = 0;
  const N = test[0].length; // 학생 수

  for (let mentor = 1; mentor <= N; mentor++) {
    for (let mentee = 1; mentee <= N; mentee++) {
      if (mentor !== mentee) {
        let isMentorValid = true;

        for (let i = 0; i < test.length; i++) {
          const mentorRank = test[i].indexOf(mentor) + 1;
          const menteeRank = test[i].indexOf(mentee) + 1;

          if (mentorRank >= menteeRank) {
            isMentorValid = false;
            break;
          }
        }
        if (isMentorValid) answer++;
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
