function bubbleSort(list) {
    let unsortedUntilIndex = list.length - 1;
    let sorted = false;

    while (!sorted) {
        sorted = true; // 모든 인덱스에서 정렬할게 없을시 true를 줘서 더이상 정렬 x
        for (let i = 0; i < unsortedUntilIndex; i++) {
            if (list[i] > list[i + 1]) {
                [list[i], list[i + 1]] = [list[i + 1], list[i]]; 
                sorted = false; //정렬이 덜 되었다는 뜻이니 false를 줘서 다음 루프를 실행!
            }
        }
        unsortedUntilIndex -= 1;
    }
    return list;
}

console.log(bubbleSort([6,5,4,8,9,2]))