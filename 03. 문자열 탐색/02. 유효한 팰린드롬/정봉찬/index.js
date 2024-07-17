/*
✅문제 제목: 유효한 팰린드롬

✅문제 유형: 문자열 탐색

✅문제 풀이 날짜: 2024-07-16

💡문제 분석 요약
  - 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 한다.
  - 팰린드롬이면 YES, 아니면 NO를 출력한다.
  - 알파벳만 가지고 검사하며 대소문자를 구분하지 않는다. 알파벳 이외의 문자들은 무시한다.

💡알고리즘 설계
  - 매개변수로 넘어온 문자열을 소문자 변환 또는 대문자 변환한다.
  - replaceAll을 통해서 알파벳만 남긴다.
  - 배열로 변환 후 reverse를 통해서 비교한다.
*/

function solution(s) {
  let answer = 'YES';

  const formattedStr = s.toLowerCase().replaceAll(/[^a-z]/g, '');
  const reversedStr = [...formattedStr].reverse().join('');

  if (formattedStr !== reversedStr) {
    answer = 'NO';
  }

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));

/*
✅문제 풀이 날짜: 2024-07-16

💡알고리즘 설계
  - 매개변수로 넘어온 문자열을 소문자 변환 또는 대문자 변환한다.
  - 알파벳을 담는 객체를 만들고 문자열을 반복문 돌면서 객체의 프로퍼티에 접근해서 알파벳이 아닌 문자는 제거한다.
  - 문자열의 길이의 절반만큼 반복문 돌면서 앞과 뒤를 비교한다.
*/

const alphabets = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e',
  f: 'f',
  g: 'g',
  h: 'h',
  i: 'i',
  j: 'j',
  k: 'k',
  l: 'l',
  m: 'm',
  n: 'n',
  o: 'o',
  p: 'p',
  q: 'q',
  r: 'r',
  s: 's',
  t: 't',
  u: 'u',
  v: 'v',
  w: 'w',
  x: 'x',
  y: 'y',
  z: 'z',
};

function solution2(s) {
  let answer = 'YES';

  const formattedStr = [...s.toLowerCase()]
    .filter((str) => alphabets[str])
    .join('');

  for (let i = 0; i < formattedStr.length / 2; i++) {
    const current = formattedStr[i];
    const reverse = formattedStr.at(-(i + 1));
    if (current !== reverse) {
      answer = 'NO';
      break;
    }
  }

  return answer;
}
console.log(solution2(str));
