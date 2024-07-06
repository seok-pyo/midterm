const WEEKS = '일월화수목금토';

export function cal(ym) {
  let ret = '';

  const [y, m] = ym.split('-');
  const date = new Date(y, m);
  if (date.getUTCDay() != 7) {
    for (let i = 0; i <= 7 - date.getUTCDay(); i += 1) {
      ret += ' ';
    }
  }
  for (let i = 1; i <= (date.getUTCDate() - date.getUTCDay() - 1) % 7; i += 1) {
    ret += `  ${i}`;
  }
  ret += '\n';
  let count = 0;
  for (
    let i = ((date.getUTCDate() - date.getUTCDay() - 1) % 7) + 1;
    i <= date.getUTCDate() - date.getUTCDay() - 1;
    i += 1
  ) {
    count += 1;
    ret += ` ${i} `;
    if (count === 7) {
      count = 0;
      ret += '\n';
    }
  }
  for (
    let i = date.getUTCDate() - date.getUTCDay() - 1;
    i <= date.getUTCDate();
    i += 1
  ) {
    ret += ` ${i} `;
  }
  // console.log(Date())
  // date.getMonth()
  // ret=date.getDay(y,m)
  console.log(`${m}월 ${y}`.padStart(21 / 2 + 4, ' '));
  console.log([...WEEKS].map((w) => w.padStart(2, ' ')).join(''));
  console.log(ret);
}
