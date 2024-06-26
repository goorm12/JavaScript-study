# 혼자 정리하는 자바스크립트 내용

# 간단하게 코드들 깃헙에 올리는 연습용!



### 배열 탐색하기
##### indexOf, lastIndexOf, includes
arr.indexOf(item, from): 인덱스 from부터 시작해 item(요소)를 찾습니다. 요소를 발견하면 해당 요소의 인덱스를 반환하고, 발견하지 못했으면 -1을 반환합니다. 
<br />
arr.lastIndexOf(item, from): indexOf와 동일한 기능을 하는데, 검색을 끝에서부터 시작한다는 점만 다릅니다.
<br />
arr.includes(item, from): 인덱스 from부터 시작해 item이 있는지를 검색하는데, 해당하는 요소를 발견하면 true를 반환합니다.
<br />
<br />
<br />
위 메서드들은 요소를 찾을 때 완전 항등 연산자 ===을 사용한다는 점에 유의하시기 바랍니다. 요소의 위치를 정확히 알고 싶은게 아니고 요소가 배열 내 존재하는지 여부만 확인하고 싶다면 arr.includes를 사용하는 게 좋을 것 같습니다.
