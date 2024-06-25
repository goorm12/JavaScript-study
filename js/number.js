// 어림수 구하기

// Math.floor()
// 소수점 첫째 자리에서 내림(버림)
let num = 4.123;

console.log(Math.floor(num)); // 4

// Math.ceil()
// 소수점 첫째 자리에서 올림
let num2 = 9.312;

console.log(Math.ceil(num2)); // 10

// Math.round()
// 소수점 첫째 자리에서 반올림
let num3 = 4.31;

console.log(Math.round(num3)); // 4

// Math.trunc()
// 소수부를 무시.
let num4 = 2.3;

console.log(Math.trunc(num4)); // 2

// 기타 수학 함수

// Math.random()
// 0과 1 사이의 난수를 반환한다. 1은 제외
console.log(Math.random());

// Math.max(), Math.min()
// 인수중 최대/최솟값을 반환한다.
console.log(Math.max(3, 5, 1, 2, -20, 9)); // 9
console.log(Math.min(1, 4, -19)); // -19

// Math.pow(n, power)
// n을 power번 거듭제곱한 값을 반환한다.
console.log(Math.pow(2, 3)); // 8
