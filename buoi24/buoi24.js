
console.log('Hello Nguyễn THị Thủy')

const callback = (erorr, data) => {
    if (erorr) {
        console.log(' calling callback ', error);
    }
    if (data) {
        console.log(' Calling callback ', data);
    }
}

function getTodo(callback) {
    let request = new XMLHttpRequest()

    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(request.responseText)
            const datastring = JSON.stringify(data);
            callback(undefined, data)
            callback(undefined, datastring)
            callback(undefined, request.responseText);
        }
        if (this.readyState === 4 && this.status !== 200) {
            callback('somgthings wrongs', erorr);
        }

    }
    request.open("get", "data.json", true);
    request.send();
}

getTodo(callback)