/*
✅문제 제목: 올바른 괄호

✅문제 유형: 자료구조(스택)

✅문제 풀이 날짜: 2024-08-05

💡문제 분석 요약
  - 올바른 괄호이면 "YES", 아니면 "NO"를 출력한다.

💡알고리즘 설계
  - 스택이 될 배열 stack을 선언한다.
  - 문자열의 길이만큼 반복문을 돌면서 여는 괄호('(')일 때는 stack에 push하고 닫는 괄호(')')일 때는 stack에서 pop한다.
  - 닫는 괄호가 나와서 stack에서 pop하기 전에 stack이 비어있다면 반복문을 종료하고 "NO"를 출력한다.
  - 반복문이 종료되었을 때 answer가 비어있지 않다면 "NO"를 출력한다. 그 외에는 "YES"를 출력한다.
*/

function solution(s) {
  let answer = 'YES';
  const BRACKET_OPEN = '(';

  const stack = [];

  for (const bracket of s) {
    if (bracket === BRACKET_OPEN) {
      stack.push(bracket);
      continue;
    }

    if (!stack.length) {
      return 'NO';
    }

    stack.pop();
  }

  if (stack.length) {
    return 'NO';
  }

  return answer;
}

let a = '(()(()))(()';
let b = '(())()';
let c = '(()()))';
console.log(solution(a)); // NO
console.log(solution(b)); // YES
console.log(solution(c)); // NO
