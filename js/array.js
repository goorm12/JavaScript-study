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

// .every() : 배열의 모든 요소가 콜백 테스트를 통해 통과하는지 확힌합니다.
// 만약 테스트가 하나라도 실패하면, 이후 테스트는 진행하지 않고 'false'를 반환합니다.
const numbers = [198, 120, 19, 7, 188];
const isValid = numbers.every((item) => item < 200);
console.log(isValid);

const users = [
  { name: "Neo", age: 12, email: "neo@github.dev" },
  { name: "Dias", age: 27, email: "dias@github.dev" },
  { name: "Ake", age: 39 },
];

console.log(users.every((user) => user.email));
console.log(users.every((user) => user.age));

// .filter() : 배열에서 콜백 테스트를 통과하는 모든 요소로 새로운 배열을 만들어 반환합니다.
// 만약 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환합니다.
const numbers2 = [17, 29, 30, 100, 129];
const filteredNumbers = numbers.filter((number) => number < 30);
console.log(filteredNumbers);

const youngUser = users.filter((user) => user.age < 30);
console.log(youngUser);
const userWithEmail = users.filter((user) => user.email);
console.log(userWithEmail);
const userWithPhone = users.filter((user) => user.phone);
console.log(userWithPhone);

// .find() : 배열에서 콜백 테스트를 처음으로 통과하는 요소를 반환합니다.
// 만약 테스트가 통과하면, 이후 테스트는 진행하지 않습니다.
// 만약 모든 테스트가 실패하면, 'undefined'를 반환합니다.
// 하나의 값만 찾습니다.
const numbers3 = [18, 12, 60, 160, 189];
const foundNumber = numbers3.find((number) => number === 189);

console.log(foundNumber);

const users2 = [
  { name: "Neo", age: 12, email: "neo@github.dev" },
  { name: "Dias", age: 27, email: "dias@github.dev" },
  { name: "Ake", age: 39 },
];

const foundUser = users2.find((user) => !user.email);
console.log(foundUser);
