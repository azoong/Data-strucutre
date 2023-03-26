//문자열에서 첫번째 중복되지 않는 문자를 반환하는 함수를 작성
//단 복잡도는 O(N)


const str = "minimum"

const 첫번째중복안됨 = (str) => {
    hash = {}
    for (const value of str){
        if(hash[value]){
            hash[value] ++
        }else{
            hash[value] = 1
        }
    }
    for (const value of str){
        if(hash[value] === 1) return value
    }
}

console.log(첫번째중복안됨(str))