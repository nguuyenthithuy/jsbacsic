
console.log('Hello Nguyễn Thị Thủy')

let arr = ['Live', 'Chelsea', 'Mu', 'Man city']

let i = 0
while (i < arr.length) {
    i++;

    if (arr[i] === 'Chelsea') {
        console.log('Found it : ', arr[i])
        continue
    }

    console.log('>>> check i:', i)
}