function solution(arr) {
  const reverseNumber = (n) =>
    Number(n.toString().split("").reverse().join(""));

  const checkIsDecimal = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // 뒤집고, isDecimal일 것만 남겨서 return
  return arr.map(reverseNumber).filter(checkIsDecimal);
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
