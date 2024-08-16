function solution(arr) {
  let answer = [];
  const sortedArr = [...arr].sort((a, b) => a - b);

  answer = arr
    .map((person, index) => {
      return person !== sortedArr[index] ? index + 1 : -1;
    })
    .filter((index) => index !== -1);

  return answer;
}

let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));
