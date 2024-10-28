function solution(s) {
  let answer = [];

  for (let x of s) {
    if (!isNaN(x)) {
      answer.push(+x);
    } else {
      let rt = answer.pop();
      let lt = answer.pop();

      if (x === "+") {
        answer.push(lt + rt);
      } else if (x === "-") {
        answer.push(lt - rt);
      } else if (x === "*") {
        answer.push(lt * rt);
      } else if (x === "/") {
        answer.push(lt / rt);
      }
    }
  }
  return +answer;
}

let str = '352+*9-';
console.log(solution(str));
