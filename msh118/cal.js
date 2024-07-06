const WEEKS = '일월화수목금토';

export function cal(ym) {
  let ret = '';

  // 이 부분을 완성하시오.

  const y = ym.slice(0, 4);
  const m = ym.slice(5);

  const firstDay = new Date(y, m - 1, 1);
  const week = firstDay.getDay();

  ret = Array.from({ length: week }, (_, i) => ' ');

  while (firstDay.getMonth() === m - 1) {
    ret.push(firstDay.getDate());
    firstDay.setDate(firstDay.getDate() + 1);
  }

  console.log(`${m}월 ${y}`.padStart(21 / 2 + 4, ' '));
  console.log([...WEEKS].map((w) => w.padStart(2, ' ')).join(''));
  console.log(
    ret
      .map((d, i) => {
        let delim = (i + 1) % 7 === 0 ? '\n' : ' ';
        d = d === 0 ? '' : d < 10 ? ` ${d}` : d;
        return `${d}${delim}`;
      })
      .join('')
  );
}

console.log('\n\n======================\n');
cal('2024-2');
console.log('-'.repeat(21), '\n');
cal('2024-7');
console.log('-'.repeat(21), '\n');
cal('2024-9');

console.log('\n\n======================\n');
