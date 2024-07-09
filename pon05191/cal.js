const WEEKS = '일월화수목금토';

export function cal(ym) {
  const [year, month] = ym.split('-');
  const dateObj = new Date(year, month - 1, 1);
  const startDay = dateObj.getDay();
  dateObj.setDate(0);
  const lastDate = dateObj.getDate();
  let ret = '';

  for (let i = 0; i < startDay; i += 1) {
    ret += ''.padStart(3, ' ');
  }

  for (let i = 1; i < lastDate; i += 1) {
    ret += `${i}`.padStart(3, ' ');
    if ((i + startDay) % WEEKS.length === 0) ret += '\n';
  }

  // 이 부분을 완성하시오.

  console.log(`${month}월 ${year}`.padStart(21 / 2 + 4, ' '));
  console.log([...WEEKS].map(w => w.padStart(2, ' ')).join(''));
  console.log(ret);
}
