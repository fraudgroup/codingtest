function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  // for (let i = 0; i < arr.length; i++) {
  //   if (!answer.includes(arr[i])) {
  //     answer.push(arr[i]);
  //   } else {
  //     for (let j = 0; j < answer.length; j++)
  //       if (answer[j] === arr[i]) {
  //         answer.splice(j, 1);
  //         answer.push(arr[i]);
  //       }
  //   }
  // }
  // return answer.reverse().splice(0, size);

  for (let i = 0; i < arr.length; i++) {
    const idx = answer.indexOf(arr[i]);

    if (idx !== -1) {
      answer.splice(idx, 1);
    } else if (answer.length >= size) {
      answer.shift();
    }
    answer.push(arr[i]);
  }
  return answer.reverse();
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
