function solution(s) {
  const objectS = {};
  [...s].map((el) => {
    objectS[el] = (objectS[el] || 0) + 1;
  });
  return Object.entries(objectS)
    .map(([key, value]) => (value === 1 ? key : key + value))
    .join("");
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
