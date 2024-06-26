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
