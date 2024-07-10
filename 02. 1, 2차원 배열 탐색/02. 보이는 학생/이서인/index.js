function solution(arr) {
  return arr.filter((el, index) => {
    if (index === 0) return true;
    return el > arr[index - 1] && el > Math.max(...arr.slice(0, index));
  });
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr).length);
