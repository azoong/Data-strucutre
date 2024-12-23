// 이진 검색 함수
function binarySearch(arr, target) {
    let left = 0; // 왼쪽 포인터
    let right = arr.length - 1; // 오른쪽 포인터

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // 중간 인덱스 계산

        if (arr[mid] === target) {
            return mid; // 타겟을 찾았을 때, 인덱스 반환
        } else if (arr[mid] < target) {
            left = mid + 1; // 타겟이 오른쪽 절반에 있을 때, 왼쪽 포인터 업데이트
        } else {
            right = mid - 1; // 타겟이 왼쪽 절반에 있을 때, 오른쪽 포인터 업데이트
        }
    }

    return -1; // 타겟을 찾지 못했을 때
}

// 사용 예시
const arr = [1, 3, 5, 7, 9];
const target = 1;
const result = binarySearch(arr, target);
console.log(`타겟 ${target}은 인덱스 ${result}에 있습니다.`);