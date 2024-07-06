import assert from 'assert';

export function telfmt(telstr) {
  // 이 부분을 작성하시오.
  const len = telstr.length ?? 0;
  // console.log('len :', len);
  if(len<=8) return telstr.replace(/(\d{1,4})(\d{4})/, "$1-$2");
  
  const A = telstr.startsWith("02") ? 2 : len >= 12 ? len - 8 : 3;
  const B = len-(A+4);
  //console.log('A:', A, 'B:', B);
  const res = new RegExp(`(\\d{${A}})(\\d{${B}})(\\d{4})`);
  return telstr.replace(res, "$1-$2-$3");
}

//console.log(telfmt('345678'));



const ㄱㄴㄷ = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const 가나다 = '가까나다따라마바빠사싸아자짜차카타파하';

const 힣 = '힣'.charCodeAt(0);

export function searchByKoreanInitialSound(data, first = '') {
  // 이 부분을 작성하시오.
}
