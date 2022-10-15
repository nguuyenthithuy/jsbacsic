
console.log('Hello Nguyễn Thị Thủy')

let obj = {
    name: "Nguyễn Thị Thủy",
    address: "Hà Tĩnh",
    getname: function () {
        return this.name;
    }

}

console.log('Bạn tên là gì ? Tôi tên là :', obj.getname(), obj.address)