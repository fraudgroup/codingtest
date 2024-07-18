function solution(s) {
  const ALPHABET = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let L = s.length;
  let strArray = new Array({ length: L });
  let reverseArray = new Array({ length: L });

  for (let i = 0; i < L; i++) {
    const lowerAlphabet = s[i].toLowerCase();
    if (ALPHABET.includes(lowerAlphabet)) {
      strArray[i] = lowerAlphabet;
      reverseArray[L - 1 - i] = lowerAlphabet;
    }
  }

  return strArray.join("") === reverseArray.join("") ? "YES" : "No";
}

/** 입출력 테스트 */
let str1 = "found7, time: study; Yduts; emit, 7Dnuof"; //Yes
let str2 = "A man, a plan, a canal, Panama"; //Yes
let str3 = "Python is fun!"; //No
let str4 = "No 77lemon, no 9melon"; //Yes

console.log(solution(str1));
console.log(solution(str2));
console.log(solution(str3));
console.log(solution(str4));
