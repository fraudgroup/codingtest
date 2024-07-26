function solution(s) {
  let answer = "";
  let count = 0;
  let current = "";

  /**
   * current가 바뀔 때마다 count를 1로 초기화해줘야 함
   *
   * current가 바뀌는 시점은?
   * -> 초기 선언 i가 0일 때 일단 current에 집어 넣어
   * -> current와 s[i]가 다를 때
   *
   * current와 s[i]가 다를 때
   * - answer += current + count
   * - count랑 current 업데이트 해주기
   *
   */

  for (let i = 0; i < s.length; i++) {
    count++;
    if (i === 0) {
      current = s[i];
    }

    if (i !== s.length - 1) {
      if (s[i] !== current) {
        answer += `${current}${count !== 1 ? count : ""}`;
        count = 1;
        current = s[i];
      }
    } else {
      if (s[i] !== current) {
        answer += current !== s[i] ? s[i] : count;
        current = s[i];
        count = 1;
      }
    }
    console.log("current : ", current, "count : ", count);
  }

  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
