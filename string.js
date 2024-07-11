// 표준 내장 객체 String
let msg = "hello world";

// length : 문자의 길이를 반환한다. (공백도 포함한다.)
console.log(msg.length); // 11

// includes() : 글자가 포함되어 있다면 true, 없다면 false 불린값을 반환함
console.log(msg.includes("h")); // true

// replace() : 문자에서 특정한 문자를 다른 문자로 바꾼 새로운 문자를 반환한다.
console.log(msg.replace("world", "So")); // hello So
// 공백을 지울수 도 있다.
// 첫 번째 공백만 지우기 때문에 모든 공백을 지우기 위해선 replaceAll() 메소드를 사용하면 된다.
console.log(msg.replace(" ", "")); // helloworld

// slice() : 문자에서 일부를 추출해 새로운 문자를 반환한다.
console.log(msg.slice(6, 12)); // world

// split() : 문자를 구분자로 나누어 배열로 반환한다.
const msg1 = "The quick brown fox jumps over the lazy dog";

console.log(msg1.split(" ")); // ['The',v'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// toLowerCase() : 문자를 영어 소문자로 바꾼 새로운 문자로 반환한다.
// toUpperCase() : 문자를 영어 소문자로 바꾼 새로운 문자로 반환한다.

console.log(msg.toUpperCase()); // HELLO WORLD
console.log(msg.toLowerCase()); // hello world

// trim() : 문자에서 앞뒤 공백을 제거한 새로운 문자를 반환한다.
let msg3 = " hello world ";
console.log(msg3.trim()); // 'hello world'
