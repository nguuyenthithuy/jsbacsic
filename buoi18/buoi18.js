
console.log('Hello Nguyễn Thị Thủy')

let sum = (a, b, callback) => {
    let tong = a + b;
    // setTimeout(() => {
    //     callback(tong);
    // }, 5000) //miliseconds

    let i = 0;
    let timer = setInterval(() => {

        callback(tong);
        i++;
        if (i === 5) {
            clearInterval(timer);
        }
    }, 1000);

}

let printSum = (messege) => {
    console.log('Check sum = ', messege);
}

sum(2, 7, printSum)