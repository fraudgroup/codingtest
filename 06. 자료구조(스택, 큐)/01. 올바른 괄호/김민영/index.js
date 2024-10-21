function solution(s) {
  if (s.length % 2 !== 0) { return 'NO' }

  let cnt = 0;

  for (i = 0; i < s.length; i++) {
    s[i] === '(' ? cnt += 1 : cnt -= 1;
  }

  return cnt === 0 ? 'YES' : 'NO'
}

let a = '(()(()))(()';
console.log(solution(a));
