function solution(s) {
  const result = [...s].reduce((acc, cur, i, arr) => {
    if (i === 0 || cur !== arr[i - 1]) {
      acc.push({ cur, count: 1 });
    } else {
      acc[acc.length - 1].count++;
    }
    return acc;
  }, []);

  return result
    .map(({ cur, count }) => (count > 1 ? cur + count : cur))
    .join("");
}

let str = "KKHSSSSSSSEKKK";
console.log(solution(str));
