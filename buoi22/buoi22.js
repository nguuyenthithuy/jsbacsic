

console.log('Hello Nguyễn Thị Thủy')

let request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (this.readyState === 4 && request.status === 200) {
        console.log('>>> Check req :', request);
    }
    else {
        console.log('Check status', request.status);
    }
}

request.open("Get", "https://jsonplaceholder.typicode.com/todos", true);
request.send();