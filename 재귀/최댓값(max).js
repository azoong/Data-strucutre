function max(array) {
  // 기본 케이스: 배열에 요소가 하나만 있는 경우
  if (array.length === 1) {
    return array[0];
  }
  
  // 재귀 케이스: 나머지 배열의 최댓값 구하기
  const maxOfRemainder = max(array.slice(1));
  
  // 첫 번째 요소와 나머지의 최댓값 비교
  if (array[0] > maxOfRemainder) {
    return array[0];
  } else {
    return maxOfRemainder;
  }
 }