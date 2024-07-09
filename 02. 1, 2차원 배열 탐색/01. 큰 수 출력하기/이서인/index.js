function solution(arr) {
  let answer = [];
  const N = arr.length;
  return arr.filter((el, index) => {
    if (index === 0) return true;
    return el > arr[index - 1];
  });
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
