let fruits = ["사과", "오렌지", "자두"];

// 배열 수정 하기
fruits[2] = "포도";

console.log(fruits); // ['사과','오렌지','포도']
// .at() : 배열을 인덱싱하며, 만약 음수를 사용하면 뒤에서부터 인덱싱한다.
console.log(fruits.at(1));

console.log(fruits[fruits.length - 1]); // 포도
console.log(fruits.at(-1)); // 포도 뒤에서부터 찾을때는 at을 통해 하는 것도 있다.

// .concat() : 배열에서 주어진 배열을 병합해 새로운 배열을 반환합니다.
const fruits1 = ["Apple", "Banana", "Cherry"];
const fruits2 = ["Cherry", "Durian"];
const fruits3 = fruits1.concat(fruits2);
const fruits4 = [...fruits1, ...fruits2];

console.log(fruits1);
console.log(fruits2);
console.log(fruits3);
console.log(fruits4);
// 중복되는 Cherry가 있다. 하지만 덮어 쓰지 않고 각각의 아이템이 나열된 Cherry가 있다.
