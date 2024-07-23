function solution(arr) {
  const reversedNumbers = arr.map((el) =>
    parseInt([...(el + "")].reverse().join(""))
  );
  return reversedNumbers
    .filter((number) => {
      if (number > 1) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            return false;
          }
        }
        return true;
      }
      return false;
    })
    .join(" ");
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
