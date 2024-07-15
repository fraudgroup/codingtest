function solution(arr) {
  let n = arr.length; // 학생 수
  let sortedScores = [...arr].sort((a, b) => b - a);
  let ranks = new Array(n); // 학생들 등수 반환할 배열 생성

  let currentRank = 1; // 현재 등수 초기화

  for (let i = 0; i < n; ) {
    let score = sortedScores[i]; // 현재 점수 저장
    let count = 0; // 동점자 변수

    // 현재 점수랑 동점인 학생 세기
    while (i + count < n && sortedScores[i + count] === score) {
      count++;
    }

    // 동일한 점수를 가진 애들한테, 현재 등수 할당하기
    for (let j = 0; j < n; j++) {
      if (arr[j] === score) {
        ranks[j] = currentRank;
      }
    }

    // 다음 점수로 이동하기 전에, 동점자 수만큼을 반복문 횟수에서 차감 함
    i += count;

    // 다음 순위로 넘어가기 위해 현재 등수에 동점자 수를 더함
    currentRank += count;
  }

  return ranks;
}

let arr = [87, 89, 92, 100, 76];
let arr2 = [87, 89, 70, 92, 100, 76, 100, 80];
console.log(solution(arr));
console.log(solution(arr2));
