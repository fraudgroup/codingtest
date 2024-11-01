function solution(s, t) {
  let answer = 0;
  let tMap = new Map();
  let sMap = new Map();

  for (let char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  let len = t.length;

  for (let i = 0; i < len - 1; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  let p1 = 0;
  for (let p2 = len - 1; p2 < s.length; p2++) {
    sMap.set(s[p2], (sMap.get(s[p2]) || 0) + 1);

    if (compareMaps(sMap, tMap)) answer++;
    sMap.set(s[p1], sMap.get(s[p1]) - 1);
    if (sMap.get(s[p1]) === 0) sMap.delete(s[p1]);
    p1++;
  }
  return answer;
}

// 두 해시맵이 같은지 비교
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}
let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
