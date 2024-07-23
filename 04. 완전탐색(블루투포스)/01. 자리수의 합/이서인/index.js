function solution(n, arr) {
  const formattedNs = arr.map((el) => {
    return [...el.toString()].reduce((a, b) => a * 1 + b * 1);
  });

  const maxEl = Math.max(...formattedNs);

  const maxElIndex = formattedNs
    .map((n, index) => (n === maxEl ? index : -1))
    .filter((index) => index !== -1);

  if (maxElIndex.length > 1) {
    const maxValues = maxElIndex.map((index) => arr[index]);
    return Math.max(...maxValues);
  }
  return arr[maxElIndex[0]];
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
