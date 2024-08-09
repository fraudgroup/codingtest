/*
✅문제 제목: 쇠막대기

✅문제 유형: 자료구조(스택)

✅문제 풀이 날짜: 2024-08-09

💡문제 분석 요약
  - 레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 ' ( ) '으로 표현된다.
  - 쇠막대기는 왼쪽 끝은 여는 괄호 ' ( '로, 오른쪽 끝은 닫힌 괄호 ' ) '로 표현된다.
  - 각 쇠막대기를 자르는 레이저는 적어도 하나 존재한다.
  - 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않는다.
  - 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있다. 끝점은 겹치지 않는다.

💡알고리즘 설계
  - 스택이 될 변수 stack을 선언하고 빈배열로 초기화한다.
  - 매개변수 s를 for 문으로 s의 길이만큼 반복문을 돈다.
  - '('가 나왔을 때 stack에 push하고 continue한다.
  - ')'가 나왔을 때 직전 값이 '('면 레이저로 stack에서 pop하고 스택의 길이만큼 answer에 더하고 continue한다.
  - ')'가 나왔을 때 직전 값이 ')'면 쇠막대기의 끝으로 stack에서 pop하고 answer에 1을 더한다.
*/

function solution(s) {
  let answer = 0;

  const BRACKET_OPEN = '(';

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const prev = s[i - 1];

    if (curr === BRACKET_OPEN) {
      stack.push(curr);
      continue;
    }

    if (prev === BRACKET_OPEN) {
      stack.pop();
      answer += stack.length;
      continue;
    }

    stack.pop();
    answer++;
  }

  return answer;
}

let a = '()(((()())(())()))(())';
let b = '(((()(()()))(())()))(()())';
console.log(solution(a)); // 17
console.log(solution(b)); // 24
