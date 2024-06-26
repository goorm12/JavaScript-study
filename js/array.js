// Array
let fruits = ["사과", "오렌지", "자두"];

// 배열 수정 하기
fruits[2] = "포도";

console.log(fruits); // ['사과','오렌지','포도']

// 배열에 담긴 요소가 몇개인지 알아내기
console.log(fruits.length); // 3

// push: 요소를 스택 끝에 집어 넣는다.
let computer = ["cpu", "motherboard", "graphics"];

computer.push("ram");

console.log(computer);

// pop: 배열 끝 요소를 제거하고, 제거한 요소를 반환한다.

let soccerPlayer = ["ake", "dias", "silva"];

console.log(soccerPlayer.pop()); // 배열에서 'silva'를 제거하고 제거된 요소를 콘솔창에 띄운다.

console.log(soccerPlayer); // 'ake', 'dias'

// shift: 배열 앞 요소를 제거하고, 제거한 요소를 반환한다.

let season = ["spring", "summer", "autumn", "winter"];

console.log(season.shift()); // 'spring'

// unshift: 배열 앞에 요소를 추가한다.

season.unshift("spring");

console.log(season); // ["spring", "summer", "autumn", "winter"]

// splice: 만능 스위스 맥가이버 칼 같은 메서드,,,,,추가,삭제,교체 모두 가능!

let apple = ["ipad", "iphone", "mac"];

// 추가
apple.splice(3, 0, "airpods"); // ["ipad", "iphone", "mac", "airpods"]
console.log(apple);

// 삭제
apple.splice(1, 1); // 인덱스 1번이 가리키는 요소부터 시작해 요소 1개 지우기
console.log(apple);

// 음수도 가능
apple.splice(-1, 0, "vision");
console.log(apple);

// array.slice() arr.slice([start], [end]) start인덱스 부터 end인덱스까지의 요소를 복사한 새로운 배열을 반환한다.

let slice = ["t", "e", "s", "t"];

console.log(slice.slice(1, 3)); // "e","s" 인덱스가 3인 요소는 제외
console.log(slice.slice(-2)); // "s", "t" 인덱스가 -2인 요소부터 제일 끝 요소까지 복사

// forEach: 주어진 함수를 배열 요소 각각에 대해 실행할 수 있다.
let user = ["kim", "kevin", "kane"];

user.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
  // kim is at index 0 in kim,kevin,kane
  // kevin is at index 1 in kim,kevin,kane
  // kane is at index 2 in kim,kevin,kane
});

// 배열 탐색하기
// indexOf, lastIndexOf, includes

let arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true

// find와 findIndex

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user2 = users.find((item) => item.id == 1);

alert(user2.name); // John
