function solution(s) {
  let answer = "";
  // key: 후보, value: 해당 후보의 누적 득표수
  let voteMap = new Map();

  // 투표 결과 Map에 저장
  for (let vote of s) {
    if (voteMap.has(vote)) {
      voteMap.set(vote, voteMap.get(vote) + 1);
    } else {
      voteMap.set(vote, 1); // 첫 득표
    }
  }

  let maxVotes = 0;
  // 가장 득표수가 높은 후보 찾기
  for (let [key, value] of voteMap) {
    if (value > maxVotes) {
      maxVotes = value;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
