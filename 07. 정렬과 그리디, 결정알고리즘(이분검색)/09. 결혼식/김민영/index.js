function solution(times) {
  let events = [];

  for (let [start, end] of times) {
    events.push([start, 1]);
    events.push([end, -1]);
  }

  events.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let current = 0;
  let maxPeople = 0;

  for (let [time, type] of events) {
    current += type;
    maxPeople = Math.max(maxPeople, current);
  }

  return maxPeople;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
