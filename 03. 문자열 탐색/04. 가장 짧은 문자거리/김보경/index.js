function solution(s, t) {
  let answer = [];
  let distance = 0;

  [...s].forEach((el) => {
    if (el !== t) {
      distance++;
    } else if (el === t) {
      distance = 0;
    }
    answer.push(distance);
  });

  [...s].reverse().forEach((el, i) => {
    if (el !== t) {
      distance++;
    } else if (el === t) {
      distance = 0;
    }

    let reverseAnswer = answer[s.length - i - 1];
    if (reverseAnswer) {
      if (reverseAnswer > distance) {
        reverseAnswer = distance;
      }
    }
  });

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
