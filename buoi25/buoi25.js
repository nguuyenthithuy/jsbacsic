

console.log('Hello Nguyễn Thị Thủy')

const callback = (error, data) => {
    if (error) {
        console.log('calling callback', error);
    }
    if (data) {
        console.log('calling callback', data)
    }
}


function getTodo(id, callback) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            const data = request.responseText;
            callback(undefined, data);
        }
        if (request.readyState === 4 && request.status !== 200) {
            callback('something wrongs', undefined);
        }


    }
    request.open("get", `https://jsonplaceholder.typicode.com/todos/${id}`, true)
    request.send();
}

getTodo(1, (error, data) => {
    if (error) {
        console.log('calling callback', error);
    }
    if (data) {
        console.log('calling callback', data)

        getTodo(2, (error, data) => {
            if (error) {
                console.log('calling callback', error);
            }
            if (data) {
                console.log('calling callback', data)

                getTodo(3, (error, data) => {
                    if (error) {
                        console.log('calling callback', error);
                    }
                    if (data) {
                        console.log('calling callback', data)
                    }
                })
            }
        })
    }
})