/**
 * n개의 배열 2개를 받아 n개의 배열을 반환
 * 두 사람의 각 회의 가위, 바위, 보 정보를 받아 각 회를 누가 이겼는지 출력
 * 1: 가위, 2: 바위, 3: 보
 * A가 이기면 A 출력, B가 이기면 B 출력, 비기면 D 출력
 */

function solution(a, b) {
  const win = {
    1: 3,
    2: 1,
    3: 2,
  };

  return a.map((v, i) => (v === b[i] ? "D" : win[v] === b[i] ? "A" : "B"));
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
