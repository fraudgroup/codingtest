function solution(str) {
  const formattedStr = str.replaceAll(/[\D]/g, "");
  const firstOne = formattedStr.search(/[1-9]/);
  return formattedStr.slice(firstOne);
}

let str = "g0e000000n2T0s8eSoft";
console.log(solution(str));
