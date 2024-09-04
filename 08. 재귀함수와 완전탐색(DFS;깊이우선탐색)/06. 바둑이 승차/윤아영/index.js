function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  const temp = (values, index) => {
    const sum = values.reduce((acc, cur) => acc + cur, 0);

    if (sum > c) {
      return;
    }

    answer = Math.max(answer, sum);

    for (let i = index; i < arr.length; i++) {
      temp([...values, arr[i]], i + 1);
    }
  };

  temp([], 0);

  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
