const arr = [1,2,3,4,5]

const Double = (arr) =>{
    for (let i=0; i<arr.length; i++){
        arr[i] *= 2 
    }
}

Double(arr)

// console.log(arr)

function factorial(n, i=1, pruduct = 1){
    if( i > n ) {
        return pruduct
    }else{
        return factorial(n, i+1, pruduct * i)
    }
    

}

console.log(factorial(1))

//재귀 하향식

//sum


function sum(arr) {
    if (arr.length == 1){
        return arr[0]
    }else{
        // console.log(arr[0])
        return arr[0] + sum(arr.slice(1));
    }
   
    
}

console.log(sum(arr))