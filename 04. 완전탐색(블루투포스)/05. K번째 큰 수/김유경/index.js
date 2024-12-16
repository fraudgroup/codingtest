function solution(n, k, cards) {
 let sums = []
 
 function dfs(start, depth, sum){
  if(depth === k){
    sums.push(sum);
    return;
  }

  for(let i = start; i < n; i ++){
    dfs(i + 1, depth + 1, sum + cards[i])
  }
 }

 dfs(0,0,0)

 const sortedUniqueSums = [...new Set(sums)].sort((a, b)=> b-a)

 return sortedUniqueSums[k] || -1
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));