function solution(need, plan) {
  const needArray = [...need];
  const planArray = [...plan];

  for (let i = 0; i < plan.length; i++) {
    if (!needArray.length) {
      return "YES";
    }

    if (planArray.shift() !== needArray[0]) {
      continue;
    }

    needArray.shift();
  }

  return needArray.length ? "NO" : "YES";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
