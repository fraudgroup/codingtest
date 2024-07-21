function solution(arr) {
  const reversedNumbers = arr.map((el) =>
    parseInt([...(el + "")].reverse().join(""))
  );
  return reversedNumbers
    .map((number) => {
      if (number > 1) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            return 0;
          }
        }
        return number;
      }
    })
    .filter((n) => n !== 0)
    .join(" ");
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
