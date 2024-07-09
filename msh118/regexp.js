import assert from 'assert';

export function telfmt(tel) {
  // 이 부분을 작성하시오.
  const len = tel?.length ?? 0;

  if (len <= 8) return tel?.replace(/(\d{1,4})(\d{4})/, '$1-$2');
  const A = tel.startsWith('02') ? 2 : len >= 12 ? len - 8 : 3;
  const B = len - (A + 4);

  const regexp = new RegExp(`(\\d{${A}})(\\d{${B}})(\\d{4})`);
  return tel.replace(regexp, '$1-$2-$3');
}

const data = [
  '강원도 고성군',
  '고성군 토성면',
  '토성면 북면',
  '북면',
  '김1수',
  '동광초등학교',
  'ABC영어유치원',
  '맛있는 ABC초콜릿',
  '비밀번호486',
];

const ㄱㄴㄷ = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const 가나다 = '가까나다따라마바빠사싸아자짜차카타파하';

const 힣 = '힣'.charCodeAt(0);

const a = 'a'.charCodeAt(0);
const z = 'z'.charCodeAt(0);
const A = 'A'.charCodeAt(0);
const Z = 'Z'.charCodeAt(0);
const zero = '0'.charCodeAt(0);
const nine = '9'.charCodeAt(0);
const ALPHANUMS = [a, z, A, Z, zero, nine];
// console.log(ALPHANUMS);

const chosung = '강원도 고성군'.charCodeAt(0);
// console.log(chosung);
export function searchByKoreanInitialSound(data, first = '') {
  // 이 부분을 작성하시오.
}
function searchInitSound(chosung) {
  return searchByKoreanInitialSound(data, chosung);
}
