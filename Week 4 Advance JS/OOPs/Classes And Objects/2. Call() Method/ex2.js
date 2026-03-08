let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}

Object.prototype.MyCall = function (bindObj, ...args) {
    bindObj.myMethod = this;

    bindObj.myMethod(...args);

}
PrintName.sayHi.MyCall(nameObj, 42);