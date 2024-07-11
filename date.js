// Date new Date() 를 통해 변환된 인스턴스를 '타임스탬프' (Timestamp)라고 합니다.
let date = new Date();
console.log(date);

// 2024년 12월 19일 12시 12분 19초
date = new Date(2024, 11, 19, 12, 19, 31);
console.log(date);

// 타임스탬프에서 각 정보를 얻을 수 있습니다.
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
// getMonth() 는 숫자를 0부터 시작하기 때문에 1월은 0부터 시작
console.log(date.getDate()); // 숫자를 1부터 센다
console.log(getDayKo(date.getDay())); // 0부터 센다. 0부터 6까지 일요일부터 시작
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

function getDayKo(day) {
  switch (day) {
    case 0:
      return "일요일";
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
  }
}

// getTime() : 유닉스 타임(UNIX Time)으로부터 경과한 시간(ms)을 반환합니다.
// Date.now() : 현재 시간을 유닉스 타임으로 반환합니다.
// 유닉스 타임이란, 1970.01.01 00:00:00 시간을 의미합니다.
// 차이점 : Date.now()는 예전 시간을 출력할 수 없고 딱 현재 시점만 가능, new Date(2000, 12, 19)로 예전 날짜를 기준으로도 시간을 알 수 있다.
const date1 = new Date();
const date2 = Date.now();

console.log(date1);
console.log(date1.getTime());
console.log(date2);

// setTimeout(() => {
//   console.log(Date.now(), date2);
//   console.log(Date.now() - date2);
// }, 1000);

// 날짜 인스턴스의 협정 세계시(UTC)를 'ISO 8601' 포맷으로 반환합니다.
// 'ISO 860'는 날짜와 시간을 표현하는 국제 표준 규격입니다.
// node.js 환경에서는 국제 표준 규격으로 된다....
console.log(new Date()); // 한국 표준시
console.log(new Date().toISOString()); // 국제 표준 규격
