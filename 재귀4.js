function 재귀(array){
    for (let temp of array){
        if(temp.length>1) 재귀(temp)
        else console.log(temp)
     }
}