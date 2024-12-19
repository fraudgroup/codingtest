function solution(arr1, arr2) {
  let p1  = 0;
  let p2 = 0;
  let answer = [];
 
  // 두 배열이 끝날 때까지 반복
  while (p1 < arr1.length && p2 < arr2.length){
   // 정렬된 배열을 만들기 위한 조건문
   // 첫 번째 배열의 값이 작으면 추가
   if(arr1[p1] < arr2[p2]){
     answer.push(arr1[p1])
     p1++
   } else {
     // 두 번째 배열의 값이 작으면 추가
     answer.push(arr2[p2]);
     p2++
   }
  }
 
  // 둘 중 한 배열이 먼저 끝나면 더 긴 배열 넣어주기
  while(p1 < arr1.length) answer.push(arr1[p1++])
  while(p2 < arr2.length) answer.push(arr2[p2++])
 
  return answer
 }
 
 let a = [1, 3, 5];
 let b = [2, 3, 6, 7, 9];
 console.log(solution(a, b));