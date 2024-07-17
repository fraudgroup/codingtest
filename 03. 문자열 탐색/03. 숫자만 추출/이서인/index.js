function solution(str) {
  const formattedStr = str.replaceAll(/[^0-9]/g, "");
  return formattedStr[0] === "0" ? formattedStr.slice(1) : formattedStr;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
