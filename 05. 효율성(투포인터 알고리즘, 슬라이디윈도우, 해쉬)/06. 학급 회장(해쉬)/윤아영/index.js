function solution(s) {
  const president = { person: null, votes: null };
  const result = [...s].reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  for (candidate in result) {
    if (result[candidate] < president.votes) {
      continue;
    }

    president.person = candidate;
    president.votes = result[candidate];
  }

  return president.person;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
