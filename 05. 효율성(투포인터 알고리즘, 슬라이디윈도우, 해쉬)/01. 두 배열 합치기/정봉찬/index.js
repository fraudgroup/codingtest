/*
✅문제 제목: 두 배열 합치기

✅문제 유형: 효율성(투포인터 알고리즘)

✅문제 풀이 날짜: 2024-07-26

💡문제 분석 요약
  - 오름차순으로 정렬된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력한다.

💡알고리즘 설계
  - Array.prototype.concat() 메서드를 활용해서 두 배열을 합친다.
  - Array.prototype.sort() 메서드를 활용해서 오름차순 정렬한다.
*/

function solution(arr1, arr2) {
  let answer = [];

  answer = arr1.concat(arr2).sort((a, b) => a - b);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

/*
✅문제 풀이 날짜: 2024-07-27

💡문제 분석 요약
  - 오름차순으로 정렬된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력한다.

💡알고리즘 설계
  - arr1의 pointer1, arr2의 pointer2 변수를 선언한다.
  - 반복문 돌면서 두 배열 중 하나라도 배열의 길이와 pointer가 같다면 반복문을 중단한다.
  - 두 배열을 각각 배열의 길이보다 pointer가 작다면 반복문 돌면서 answer에 값을 채워준다.

💡느낀점
  - 자바스크립트의 sort는 O(nlogn)이다. 하지만 반복문으로 해결하면 O(n+m)만큼의 시간 복잡도를 가진다.
*/

function solution2(arr1, arr2) {
  let answer = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] > arr2[pointer2]) {
      answer.push(arr2[pointer2++]);
    } else {
      answer.push(arr1[pointer1++]);
    }
  }

  while (pointer1 < arr1.length) {
    answer.push(arr1[pointer1++]);
  }

  while (pointer2 < arr2.length) {
    answer.push(arr2[pointer2++]);
  }

  answer = answer.join(' ');

  return answer;
}

console.log(solution2(a, b));
