

console.log('Hello Nguyễn Thị Thủy')

const callback = (error, data) => {
    if (error) {
        console.log('>>> calling callback ', error);
    }
    if (data) {
        console.log('>>> calling callback', data);
    }
}

function getTodo(id, callback) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()

        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                const data = request.responseText;
                // callback(undefined, data);
                resolve(data);
            }
            if (request.readyState === 4 && request.status !== 200) {
                // callback('somethings wrong', error);
                reject('something wrong')
            }


        }
        request.open("get", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
        request.send();
    })


}

getTodo(1)
    .then(data => {
        console.log('get data', data);


        getTodo(2).then(data => {
            console.log('get data 2', data);
        })
    })
    .catch(error => {
        console.log('>>>', error)
    })
