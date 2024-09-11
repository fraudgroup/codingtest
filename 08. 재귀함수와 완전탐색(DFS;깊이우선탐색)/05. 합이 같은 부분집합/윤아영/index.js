function solution(arr) {
  let answer = "NO";
  const sum = arr.reduce((acc, cur) => acc + cur, 0);

  const DFS = (index, path) => {
    const subsetSum = path.reduce((acc, cur) => acc + cur, 0);
    if (subsetSum === sum - subsetSum) {
      answer = "YES";
      return true;
    }

    for (let i = index; i < arr.length; i++) {
      if (DFS(i + 1, path.concat([arr[i]]))) {
        return true;
      }
    }

    return false;
  };

  DFS(0, []);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
