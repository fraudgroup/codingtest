function solution(s, t) {
  let answer = 0;
  const tAlphabetMap = new Map();
  const sAlphabetMap = new Map();

  const isAnagram = (sMap, tMap) => {
    if (sMap.size !== tMap.size) {
      return false;
    }

    for (let [key, value] of tMap) {
      if (sMap.get(key) !== value) {
        return false;
      }
    }

    return true;
  };

  [...t].forEach((alphabet) => tAlphabetMap.set(alphabet, (tAlphabetMap.get(alphabet) || 0) + 1));
  [...s.slice(0, t.length)].forEach((alphabet) => sAlphabetMap.set(alphabet, (sAlphabetMap.get(alphabet) || 0) + 1));

  for (let i = t.length; i <= s.length; i++) {
    if (isAnagram(sAlphabetMap, tAlphabetMap)) {
      answer++;
    }

    if (!s[i]) {
      break;
    }

    const pointer = i - t.length;

    sAlphabetMap.set(s[i], (sAlphabetMap.get(s[i]) || 0) + 1);

    if (sAlphabetMap.get(s[pointer]) === 1) {
      sAlphabetMap.delete(s[pointer]);
    } else {
      sAlphabetMap.set(s[pointer], sAlphabetMap.get(s[pointer]) - 1);
    }
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
