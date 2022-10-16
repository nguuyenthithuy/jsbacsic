
console.log('Hello Nguyễn Thị Thủy')

let items = [
    { name: 'Nguyễn Thị Thủy', age: 19 },
    { name: 'Nguyễn Thành Đạt', age: 19 },
    { name: 'Cao Thị Hằng', age: 22 },
    { name: 'Nguyễn Huy Phúc', age: 21 },
    { name: 'Võ Thị Uyên', age: 29 },
    { name: 'Nguyễn Văn Nhâm', age: 28 },
    { name: 'Hoàng Anh Thảo', age: 27 },
]

items.sort((a, b) => {
    return a.age - b.age;
})

console.log(items)