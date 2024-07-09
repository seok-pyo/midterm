const WEEKS = '일월화수목금토';

export function cal(ym) {
  let ret = '';

  // 이 부분을 완성하시오.
  const [y, m] = ym.split('-').map(Number)
  const d = new Date(y,m,1)
  d.setDate(0)
  const lastDate = d.getDate()
  d.setDate(1)
  let startDay = d.getDay()
  ret += ' '.padStart(startDay * 3, ' ')
  for (let i = 1; i <= lastDate; i += 1){
    if (startDay++ % 7 === 0) ret += '\n'
    ret += i.toString().padStart(3, " ")
  }

  console.log(`${m}월 ${y}`.padStart(21 / 2 + 4, ' '));
  console.log([...WEEKS].map(w => w.padStart(2, ' ')).join(''));
  console.log(ret);
}
