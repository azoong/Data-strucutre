//삼각수 재귀로 표현

/* 삼각수라는 수열이 있다. 1,3,6,10,15,21로 시작해 패턴 내 N번째 수까지 일정 패턴이 이어진다. N번째 값은 N에 바로 앞 숫자를 더한 값이다.

예를들어 수열에서 7번째 수는 7(즉 N)에 21(수열에서 바로 앞에 수)를 더한 28이다. 숫자 N을 받아 수열 내 올바른 값을 반환하는 함수를 작성하라.

즉 함수에 숫자 7을 전달하며 ㄴ함수는 28을 반환해야 한다.

*/

function triangularNumber(N) {
    if(N == 1) return 1
    return N + triangularNumber(N-1)

}

console.log(triangularNumber(7))