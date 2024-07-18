function solution(s, t) {
  let answer = new Array(s.length).fill(0);
  let tPrevIndex = -1;
  let tNextIndex = s.indexOf(t);

  for (let i = 0; i < s.length; i++) {
    if (i === tNextIndex) {
      tPrevIndex = i;
      tNextIndex = s.indexOf(t, i + 1);
      continue;
    }

    if (tPrevIndex === -1) {
      answer[i] = Math.abs(tNextIndex - i)
      continue;
    }
    
    if (tNextIndex === -1) {      
      answer[i] = Math.abs(tPrevIndex - i)
      continue;
    }
    
    answer[i] = Math.min(Math.abs(tPrevIndex - i), Math.abs(tNextIndex - i));
  }

  return answer.join(" ");
}

let str = 'teachermode';
console.log(solution(str, 'e'));
