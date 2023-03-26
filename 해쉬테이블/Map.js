const table = new Map()
const table2 = {}

table2.key = 100
table2.key2 = 'hello'
table.set('key', 100)
table.set('key2', 'hello')


const object = {a :1}

table.set(object, 1) // Map 사용시 오브젝트나 배열도 키값으로 사용가능
console.log(table.get(object))

console.log(table)
console.log(table2)


console.log(table.keys())
console.log(table.values())
table.clear()
console.log(table.values())




 