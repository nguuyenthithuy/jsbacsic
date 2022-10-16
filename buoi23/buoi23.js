
console.log('Hello Nguyễn Thị Thủy')

const callback = (error, data) => {
    if (error) {
        console.log('>>> caling callback with error', error);
    }
    if (data) {
        console.log('>>> calling callback with data', data);
    }
}

function getTodos(callback) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState === 4 && request.status === 200) {
            const data = request.responseText;
            callback(undefined, data);
        }
        if (this.readyState === 4 && request.status !== 200) {
            callback('somethings wrongs', undefined);
        }

    }
    request.open("get", 'https://jsonplaceholder.typicode.com/todos', true);
    request.send();
}

console.log('Hello 1')
console.log('Hello 2')
getTodos(callback)
console.log('Hello 3')
console.log('Hello 4')



