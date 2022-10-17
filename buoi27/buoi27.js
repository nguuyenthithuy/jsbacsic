

console.log('Hello Nguyễn Thị Thủy')


// ... : copy
// let arr1 = [1, 2, 3, 4, 5];

// let arr2 = [...arr1, 6];

// console.log('check arr1', arr1);
// console.log('check arr2', arr2);

// let state = {
//     name: 'Nguyễn Thị Thủy',
//     age: 19
// }

// let state2 = {
//     ...state, yeu: 'Nguyễn Thành Đạt'
// }
// console.log('check state2 ', state2)

let state = {
    name: 'Nguyễn Thị Thủy',
    age: 19
}

// let state2 = {
//     ...state, yeu: 'Nguyễn Thành Đạt'
// }
// console.log('check state2 ', state2)
// let { name, age } = state;
// console.log(name, age);

let arr = ['Nguyễn Thị Thủy', '19']
let [name, age] = arr;
console.log('>>> chekc key :', name, age)