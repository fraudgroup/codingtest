function solution(n, arr) {
  let answer = 0;
  const graph = Array.from({length: n + 1}, () => [])
  const visited = new Array(n + 1).fill(false)

  for (const [s, e] of arr) {
    graph[s].push(e)
  }

  function DFS(v) {
    if (v === n) {
      answer++
      return
    }
      
      visited[v] = true;
  
      for (const next of graph[v]) {
        if (!visited[next]) {
          DFS(next)
        }
      }
    
    visited[v] = false
  }

  DFS(1) 
  
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
