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
