
console.log('Hello Nguyễn Thị Thủy')

let arr = [
    {
        name: 'Nguyễn Thị Thủy',
        age: 19,
    },
    {
        name: 'Nguyễn Thành Đạt',
        age: 19,
    },
    {
        name: 'Nguyễn Huy Phúc',
        age: 20,
    },
    {
        name: 'Cao Thị Hằng',
        age: 21,
    },
    {
        name: 'Võ Thị Uyên',
        age: 22,
    },
]
// filter : Trả về nhiều 
// find : chỉ trả về 1 cái đầu tiên

let filter = arr.filter((item, index) => {
    return item && item.age === 19;
})

console.log(filter)

let find = arr.find((item, index) => {
    return item && item.age === 19;
})

console.log(find)
