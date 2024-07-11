// Date new Date() 를 통해 변환된 인스턴스를 '타임스탬프' (Timestamp)라고 합니다.
let date = new Date();
console.log(date);

// 2024년 12월 19일 12시 12분 19초
// date = new Date(2024, 12, 19, 12, 19);
// console.log(date);

// 타임스탬프에서 각 정보를 얻을 수 있습니다.
console.log(date.getFullYear());
console.log(date.getMonth());
// getMonth() 는 숫자를 0부터 시작하기 때문에 1월은 0부터 시작
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
