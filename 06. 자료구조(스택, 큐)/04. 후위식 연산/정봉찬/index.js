/*
✅문제 제목: 후위식 연산

✅문제 유형: 자료구조(스택)

✅문제 풀이 날짜: 2024-08-08

💡문제 분석 요약
  - 후위연산식이 주어지면 연산한 결과를 출력한다.
  - 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

💡알고리즘 설계
  - 스택이 될 변수 stack을 선언하고 빈배열로 초기화한다.
  - 사칙연산을 연산하는 함수인 operator를 정의한다.
  - 후위연산식 문자열을 for ... of 문으로 순회하면서 스택에 담는다.
  - 스택에 담을 때 연산자가 나오면 스택에서 숫자 두 개를 꺼내 operator 함수로 연산한 결과를 다시 스택에 담는다.
  - 반복문이 종료된 후 스택에 남은 숫자가 후위연산식의 결과다.

💡영어사전
  - 피연산자는 operand, 연산자는 operator다. 변수로 op를 사용하면 통용적으로 사용할 수 있다.
*/

function solution(s) {
  let answer;
  const stack = [];

  function operator(x, op, y) {
    switch (op) {
      case '+':
        return x + y;

      case '-':
        return x - y;

      case '*':
        return x * y;

      case '/':
        return x / y;
    }
  }

  for (const op of s) {
    if (Number(op)) {
      stack.push(Number(op));
      continue;
    }

    const y = stack.pop();
    const x = stack.pop();

    stack.push(operator(x, op, y));
  }

  answer = stack.pop();

  return answer;
}

let str = '352+*9-';
console.log(solution(str));
