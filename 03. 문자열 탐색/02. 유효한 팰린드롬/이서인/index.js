function solution(s) {
  const alphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );
  Array(26)
    .fill()
    .map((v, i) => String.fromCharCode(i + 97));

  const filteredS = [...s.toLowerCase()]
    .filter((el) => alphabet.includes(el))
    .join("");

  return filteredS === [...filteredS].reverse().join("") ? "YES" : "NO";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
