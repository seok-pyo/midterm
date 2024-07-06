export function telfmt(tel) {
  const len = tel.length;

  if (6 < len && len <= 8) return tel.replace(/(\d{4})(\d{4})/, '$1-$2');
  else if (len <= 6) return tel.replace(/(\d{2})(\d{4})/, '$1-$2');

  const A = tel.startsWith('02') ? 2 : len >= 12 ? len - 8 : 3;
  const B = len - (A + 4);

  const r = `(\\d{${A}})(\\d{${B}})(\\d{4})`;
  const regExp = new RegExp(r);

  return tel.replace(regExp, '$1-$2-$3');
}

const ㄱㄴㄷ = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const 가나다 = '가까나다따라마바빠사싸아자짜차카타파하';

const 힣 = '힣'.charCodeAt(0);

export function searchByKoreanInitialSound(data, first = '') {
  const r = [...first].reduce((acc, cur) => {
    let idx = ㄱㄴㄷ.indexOf(cur) ? ㄱㄴㄷ.indexOf(cur) : cur;

    const S = 가나다[idx].charCodeAt(0);
    const E = idx === 가나다.length ? 힣 : 가나다[idx + 1].charCodeAt(0) - 1;

    return `${acc}[${String.fromCharCode(S)}-${String.fromCharCode(E)}]`;
  }, '');
  const regExp = new RegExp(r);

  return data.filter((e) => regExp.test(e));
}
