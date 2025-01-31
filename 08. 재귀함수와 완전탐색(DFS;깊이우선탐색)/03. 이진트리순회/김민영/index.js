function preorderTraversal(n) {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + ' ';
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
}

function inorderTraversal(n) {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      answer += v + ' ';
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
}

function postorderTraversal(n) {
  let answer = '';
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      answer += v + ' ';
    }
  }
  DFS(n);
  return answer;
}

console.log("전위순회 출력:", preorderTraversal(1));
console.log("중위순회 출력:", inorderTraversal(1));
console.log("후위순회 출력:", postorderTraversal(1));
