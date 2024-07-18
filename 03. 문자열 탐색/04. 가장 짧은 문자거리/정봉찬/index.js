/*
✅문제 제목: 가장 짧은 문자거리

✅문제 유형: 문자열 탐색

✅문제 풀이 날짜: 2024-07-19

💡문제 분석 요약
  - 문자열의 각 문자가 문자 t와 떨어진 최소거리를 출력한다.
  - 문자열과 문자는 소문자로만 구성된다.
  - 문자열의 길이는 100을 넘지 않는다.

💡알고리즘 설계
  - 문자열을 t로 split한다.
  - split한 배열을 map돌면서 각 문자열을 배열로 변환하고 map돌면서 index가 (length / 2)보다 작을 때는 index + 1로 반환하고
    크거나 같을 때는 length - index를 반환한다.
*/

function solution(s, t) {
  let answer = [];

  answer = s
    .split(t)
    .map((str) => {
      if (!str) {
        return str;
      }

      const length = str.length;

      return [...str]
        .map((_, index) => (index >= length / 2 ? length - index : index + 1))
        .join('');
    })
    .join('0');

  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
