function solution(arr) {
  const answer = [];

  const reverseNumber = (n) => {
    return Number(n.toString().split("").reverse().join(""));
  };

  const checkIsDecimal = (n) => {
    // 2보다 작으면 소수가 아님
    if (n < 2) return false;

    // 소수인지 아닌지 반복문 태우기
    for (let i = 2; i < n; i++) {
      // 나머지가 0, 즉 나눠지는 숫자가 있다는 것은 소수가 아니라는 것
      if (n % i === 0) return false;
    }
    return true;
  };

  const reverseArray = arr.map((n) => reverseNumber(n));
  reverseArray.map((n) => {
    if (checkIsDecimal(n)) {
      answer.push(n);
    }
  });

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
