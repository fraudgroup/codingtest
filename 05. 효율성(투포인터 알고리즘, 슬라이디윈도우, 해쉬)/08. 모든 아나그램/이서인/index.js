function solution(s, t) {
  // 슬라이딩윈도우로 length 같은 부분 배열 구하고 해시 만들기
  let hashes = [];
  let answer = [];

  // t.length와 같은 길이의 부분 배열 구하기
  [...s].forEach((_, index) => {
    if (index + t.length <= [...s].length) {
      let window = [...s].slice(index, index + t.length);
      let hash = new Map();

      window.forEach((el) => {
        hash.set(el, (hash.get(el) || 0) + 1);
      });

      hashes.push(hash);
    }
  });

  // hash1: 구해야 할 t의 해시
  const hash1 = new Map();
  [...t].forEach((el) => {
    hash1.set(el, (hash1.get(el) || 0) + 1);
  });

  // hashes를 순회하면서 hash의 키와 값이 hash와 같은지 확인
  hashes.forEach((hash) => {
    let isMatch = true;

    for (const [key, value] of hash) {
      if (hash1.get(key) !== value) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      answer.push(hash);
    }
  });
  return answer.length;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
