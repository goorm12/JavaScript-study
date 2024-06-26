let lineCount = 5;
let star1 = "";
let star2 = "";
let star3 = "";

// 라인별 별찍기
for (let i = 0; i < lineCount; i++) {
  for (let j = 0; j <= lineCount; j++) {
    star1 += "*";
  }
  star1 += "\n";
}

console.log(star1);

// 직각 삼각형
for (let i = 0; i < lineCount; i++) {
  for (let j = 0; j <= i; j++) {
    star2 += "*";
  }
  star2 += "\n";
}

console.log(star2);

// 직각 삼각형 2
for (let i = 0; i < lineCount; i++) {
  for (let j = 0; j <= lineCount - i; j++) {
    star3 += "*";
  }
  star3 += "\n";
}

console.log(star3);
