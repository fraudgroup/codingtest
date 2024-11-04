function solution(need, plan) {
  let x = [];

  for (i of plan) {
    if (need.indexOf(i) !== -1) {
      x.push(i)
    }
  }

  return x.join('') === need ? 'YES' : 'NO'
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
