function solution(a, b) {
  let answer = "";

  function checkVictory(a, b) {
    if (a === b) {
      return "D";
    }
    switch (a) {
      case 1: {
        if (b === 2) {
          return "B";
        } else if (b === 3) {
          return "A";
        }
      }
      case 2: {
        if (b === 1) {
          return "A";
        } else if (b === 3) {
          return "B";
        }
      }
      case 3: {
        if (b === 1) {
          return "B";
        } else if (b === 2) {
          return "A";
        }
      }
    }
  }

  for (let i = 0; i < a.length; i++) {
    answer += checkVictory(a[i], b[i]);
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
