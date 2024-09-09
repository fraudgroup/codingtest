function solution(n, m) {
  let elements = new Set()
  
  function DFS(el, part = "") {
    if (part.length === m) {
      elements.add(part);
      return;
    }
    if (el > n) return;
    
    DFS(el + 1, part + el)
    DFS(el + 1, part);
  }
  
  DFS(1);

  return [...elements, [...elements].length].join("\n")
}

console.log(solution(4, 2));
