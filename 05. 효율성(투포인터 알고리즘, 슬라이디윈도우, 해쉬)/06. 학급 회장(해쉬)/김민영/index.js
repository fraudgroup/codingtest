function solution(s) {
  let votes = new Map([
    ['A', 0],
    ['B', 0],
    ['C', 0],
    ['D', 0],
    ['E', 0]
  ]);

  for (x of s) {
    votes.set(x, votes.get(x) + 1);
  }

  let maxVotes = 0;
  let winner = '';

  for (let [key, value] of votes) {
    if (value > maxVotes) {
      maxVotes = value;
      winner = key;
    }
  }

  return winner;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
