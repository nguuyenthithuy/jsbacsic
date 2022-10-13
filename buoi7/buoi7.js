

console.log('Hello Nguyễn THị Thủy')

let obj = {
    name: 'Nguyễn Thị Thủy',
    address: 'Hà Tĩnh',
    email: '',
    gender: '',
};
let b = 'name'// b= phải đúng với obj[name] thay b='xam' sẽ ra nguyễn thị thủy
obj[b] = 'đạt'//
// hoặc là obj.name ='Nguyễn Thành Đạt' sẽ in ra nguyễn thành đạt

console.log(`What your name ? My name is `, obj['name'])
console.log(`Where are you from ? I'm from `, obj['address'])