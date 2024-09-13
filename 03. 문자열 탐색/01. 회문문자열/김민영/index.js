function solution(s) {
  return s.toLowerCase() === s.toLowerCase().split('').reverse().join('') ? 'YES' : 'NO';
}

let str = 'goooG';
console.log(solution(str));