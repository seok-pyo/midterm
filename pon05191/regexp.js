export function telfmt(tel) {
  const localNum = Number(tel[1]);

  const C = 4;
  const A = (localNum === 2) || (tel.length < 7) ? 2 :
    tel.length % 4 === 0 ? 4 : 3;
  const B = tel.length - (A + C);

  const regExp = tel.length <= 8 ?
    new RegExp(`(\\d{${A}})(\\d{${B}})`) :
    new RegExp(`(\\d{${A}})(\\d{${B}})(\\d{${C}})`);

  return tel.length <= 8 ?
    tel.replace(regExp, '$1-$2') :
    tel.replace(regExp, '$1-$2-$3');
}


export function searchByKoreanInitialSound(data, first = '') {
  const CHO = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
  const 가 = '가'.charCodeAt(0);
  const JAMO_INTERVAL = 588;
  const SAME_RANGE = JAMO_INTERVAL - 1;

  const getChar = (code) => String.fromCharCode(code);
  const getCode = (cho) => 가 + (CHO.indexOf(cho) * JAMO_INTERVAL);
  const getRegStr = (cho) => `[${cho}${getChar(getCode(cho))}-${getChar(getCode(cho) + SAME_RANGE)}]`;
  const getRegExp = () => [...first].reduce((str, cur) => str += getRegStr(cur), '');

  const regExp = new RegExp(getRegExp());

  return data.reduce((result, cur) => {
    if (regExp.test(cur)) result.push(cur);
    return result;
  }, []);
}
