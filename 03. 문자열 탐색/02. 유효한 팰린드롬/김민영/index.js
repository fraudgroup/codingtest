function solution(s) {
  const cleanedString = s
    .toLowerCase()
    .replace(/[^a-z]/g, '')

  return cleanedString === [...cleanedString].reverse().join('') ? 'YES' : 'NO';
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
