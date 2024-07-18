function solution(s) {
  let answer = 0;

  let arr = s.split("").forEach((el) => {
    el.toLowerCase() !== el && answer++;
  });

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
