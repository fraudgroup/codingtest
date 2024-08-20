function solution(n) {
  const convertBinary = (n) => {
    if (n / 2 < 1) {
      return n % 2;
    }

    return `${convertBinary(Math.floor(n / 2))}${n % 2}`;
  };

  return +convertBinary(n);
}

console.log(solution(11));
