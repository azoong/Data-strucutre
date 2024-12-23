function add_until_100(array) {
    if (array.length == 0) return 0
    temp = add_until_100(array.slice(1))
    if (array[0] + temp > 100) {
        return temp
    } else {
        return array[0] + temp
    }
}


console.log(add_until_100([11, 9, 3, 4, 5, 6, 40, 59, 20, 1]))

function golomb(N, memo = {}) {
    if (N == 1) return 1
    if (!memo[N]) {
        return memo[N] = 1 + golomb(N - golomb(N - 1))
    } else {
        return memo[N]
    }
}


console.log(golomb(2))


function unique_paths(rows, columns) {
    console.log('RECURSION')
    if (rows == 1 || columns == 1) return 1
    return unique_paths(rows - 1, columns) + unique_paths(rows, columns - 1)
}


function unique_paths2(rows, columns, memo = {}) {
    console.log("RECURSION")
    if (rows == 1 || columns == 1) return 1
    if (!memo[[rows, columns]]) {
        return memo[[rows, columns]] = unique_paths2(rows - 1, columns, memo) + unique_paths2(rows, columns - 1, memo)
    } else {
        return memo[[rows, columns]]
    }
}


console.log(unique_paths(3, 3))
console.log(unique_paths2(3, 3))

