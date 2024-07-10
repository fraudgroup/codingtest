function solution(arr) {
  const sortArray = [...arr].sort((a, b) => b - a);
  const sortMap = new Map(
    sortArray
      .map((v, i) => [v, i + 1])
      .filter((v, i, array) => v[0] !== array[i - 1]?.[0])
  );

  return arr.map((number) => sortMap.get(number));
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
