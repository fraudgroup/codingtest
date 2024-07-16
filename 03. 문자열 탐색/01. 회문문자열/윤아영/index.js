function solution(s) {
  const lowerString = s.toLowerCase();

  for (let i = 0; i < s.length / 2; i++) {
    if (lowerString[i] !== lowerString[lowerString.length - (i + 1)]) {
      return 'NO';
    }
  }

  return 'YES';
}

let str = 'goooG';
console.log(solution(str));
