function solution(test) {
  const numberOfStudents = test[0].length;
  const mentoNmentee = {};

  for (let i = 0; i < test.length; i++) {
    for (j = 0; j < numberOfStudents; j++) {
      if (i === 0) {
        mentoNmentee[test[i][j]] = test[i].slice(j + 1);
        continue;
      }

      const below = new Set(test[i].slice(j + 1));
      mentoNmentee[test[i][j]] = mentoNmentee[test[i][j]].filter((v) =>
        below.has(v)
      );
    }
  }

  return Object.values(mentoNmentee).flat().length;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
