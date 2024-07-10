function solution(a, b) {
  return a
    .map((_, index) => {
      if (a[index] === b[index]) return "D";
      if (
        (a[index] === 2 && b[index] === 1) ||
        (a[index] === 3 && b[index] === 2) ||
        (a[index] === 1 && b[index] === 3)
      )
        return "A";
      return "B";
    })
    .join("\n");
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
