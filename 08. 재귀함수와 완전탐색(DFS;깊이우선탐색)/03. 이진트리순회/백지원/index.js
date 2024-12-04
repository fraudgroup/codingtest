function solution(n) {
  let answer = {
    preOrder: "",
    postOrder: "",
  };

  const tree = {
    1: [2, 3],
    2: [4, 5],
    3: [6, 7],
    4: [null, null],
    5: [null, null],
    6: [null, null],
    7: [null, null],
  };

  function preOrder(node) {
    if (!node) return; // 기저조건
    answer.preOrder += node + " "; // 현재 노드 번호 추가
    preOrder(tree[node][0]); // 왼쪽 자식을 재귀 호출
    preOrder(tree[node][1]); // 오른쪽 자식을 재귀 호출
  }

  function postOrder(node) {
    if (!node) return;
    postOrder(tree[node][0]);
    postOrder(tree[node][1]);
    answer.postOrder += node + " ";
  }

  preOrder(n);
  postOrder(n);
  return answer;
}

console.log(solution(1));
