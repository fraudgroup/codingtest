function solution(arr) {
  const reverseNumbers = arr.map((v) => +[...String(v)].reverse().join(""));

  return reverseNumbers.filter((v) => {
    if (v < 2) return false;

    for (let i = 2; i < Math.sqrt(v); i++) {
      if (!(v % i)) {
        return false;
      }
    }

    return true;
  });
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
