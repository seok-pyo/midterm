const WEEKS = '일월화수목금토';

export function cal(ym) {
  let ret = '';

  // 이 부분을 완성하시오.
  const [y, m] = ym.split('-');
  const firstDay = new Date(y, m - 1, 2).getDay();
  const lastDay = new Date(y, m, 0).getDate();

  ret += ' '.repeat(firstDay * 3);

  for (let i = 1; i <= lastDay; i += 1) {
    ret += i.toString().padStart(3, ' ');
  }

  console.log(`${m}월 ${y}`.padStart(21 / 2 + 4, ' '));
  console.log([...WEEKS].map((w) => w.padStart(2, ' ')).join(''));

  let sliceIdx = 0;
  for (let i = 0; i < 5; i += 1) {
    console.log(ret.slice(sliceIdx, sliceIdx + 21));
    sliceIdx += 21;
  }
}
