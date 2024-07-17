function solution(str) {
  return +str.replaceAll(/\D/gi, '');
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
