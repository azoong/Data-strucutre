const fruits = ['apple', 'orange', 'banana']

const newfruit = fruits.map((fruit) => {
    return fruit === 'banana' ? 'gyul' : fruit;
})

console.log(newfruit)


const sum = Array
    .from(new Array(5), (_, k) => k + 5)
// .reduce((acc, cur) => acc + cur, 0);

console.log(sum)




const makeCompany = ({ name, address, serviceName }) => {
    return {
        name,
        address,
        serviceName
    }
};
const cobalt = makeCompany({ name: 'Cobalt. Inc.', address: 'Seoul', serviceName: 'Present' });

console.log(cobalt.name)



const str = ['1','2','3','4','5']

const res = Array.from(str, Number)

console.log(str)
console.log(res)