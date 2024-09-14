function solution(s) {
  const cleanedString = s
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g, '')
    .replace(/[0-9]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();

  return cleanedString === cleanedString.split('').reverse().join('') ? 'YES' : 'NO';
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
