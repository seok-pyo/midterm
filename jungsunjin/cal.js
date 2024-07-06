const WEEKS = '일월화수목금토';

export function cal(ym) {
  let ret = '';

  // 이 부분을 완성하시오.

  console.log(`${m}월 ${y}`.padStart(21 / 2 + 4, ' '));
  console.log([...WEEKS].map(w => w.padStart(2, ' ')).join(''));
  console.log(ret);
}
