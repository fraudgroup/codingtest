/*
✅문제 제목: 괄호문자제거

✅문제 유형: 자료구조(스택)

✅문제 풀이 날짜: 2024-08-06

💡문제 분석 요약
  - 소괄호 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

💡알고리즘 설계
  - 스택 변수 stack을 선언 후 빈 배열로 초기화한다.
  - for ... of 문으로 문자열을 순회하면서 문자가 여는 괄호('(')면 stack에 push, 닫는 괄호(')')는 stack에서 pop한다.
  - 만약 stack의 length가 0일 때 나오는 문자는 answer에 더한다. 0이 아니면 괄호 안에 있는 문자임.
*/

function solution(s) {
  let answer;
  answer = '';
  const BRACKET_OPEN = '(';
  const BRACKET_CLOSE = ')';

  const stack = [];

  for (const str of s) {
    if (str === BRACKET_OPEN) {
      stack.push(str);
      continue;
    }

    if (str === BRACKET_CLOSE) {
      stack.pop();
      continue;
    }

    if (stack.length) continue;

    answer += str;
  }

  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
