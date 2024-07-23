function solution(s, t) {
  let answer = [];
  let tIndexList = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      tIndexList.push(i);
    }
  }

  for (let i = 0; i < s.length; i++) {
    let distance;
    for (let j = 0; j < tIndexList.length; j++) {
      if (s[i] === t) {
        answer[i] = 0;
      }
      distance =
        Math.abs(i - tIndexList[j]) > distance
          ? distance
          : Math.abs(i - tIndexList[j]);
      answer[i] = distance;
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
