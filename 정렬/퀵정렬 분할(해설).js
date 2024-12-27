class SortableArray {
  constructor(array) {
    this.array = array;
  }

  partition(leftPointer, rightPointer) {
    // 항상 가장 오른쪽 요소를 피벗으로 선택합니다.
    // 나중에 사용하기 위해 피벗의 인덱스를 저장합니다:
    const pivotIndex = rightPointer;

    // 피벗 값을 가져옵니다:
    const pivot = this.array[pivotIndex];

    // 오른쪽 포인터를 피벗 바로 왼쪽으로 이동합니다
    rightPointer -= 1;

    while (true) {
      // 왼쪽 포인터가 가리키는 값이 피벗보다 작은 동안
      // 왼쪽 포인터를 오른쪽으로 이동합니다:
      while (this.array[leftPointer] < pivot) {
        leftPointer += 1;
      }

      // 오른쪽 포인터가 가리키는 값이 피벗보다 큰 동안
      // 오른쪽 포인터를 왼쪽으로 이동합니다:
      while (this.array[rightPointer] > pivot) {
        rightPointer -= 1;
      }

      // 이제 왼쪽과 오른쪽 포인터 모두 이동을 멈춘 
      // 지점에 도달했습니다.

      // 왼쪽 포인터가 오른쪽 포인터에 도달하거나 
      // 넘어갔는지 확인합니다. 그렇다면 나중에 피벗을 
      // 교환하기 위해 루프를 벗어납니다:
      if (leftPointer >= rightPointer) {
        break;
      }
      // 왼쪽 포인터가 여전히 오른쪽 포인터의 왼쪽에 있다면,
      // 왼쪽과 오른쪽 포인터의 값을 교환합니다:
      else {
        [this.array[leftPointer], this.array[rightPointer]] = 
          [this.array[rightPointer], this.array[leftPointer]];

        // 다음 라운드의 왼쪽과 오른쪽 포인터 이동을 위해
        // 왼쪽 포인터를 오른쪽으로 이동합니다:
        leftPointer += 1;
      }
    }

    // 파티션의 마지막 단계로,
    // 왼쪽 포인터의 값과 피벗을 교환합니다:
    [this.array[leftPointer], this.array[pivotIndex]] = 
      [this.array[pivotIndex], this.array[leftPointer]];

    // 이후에 나올 퀵정렬 메소드를 위해
    // 왼쪽 포인터를 반환합니다:
    return leftPointer;
  }
}