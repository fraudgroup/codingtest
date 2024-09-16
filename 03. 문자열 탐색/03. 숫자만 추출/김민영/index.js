function solution(str) {
  return +(str.replaceAll(/\D/g, ''));
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
