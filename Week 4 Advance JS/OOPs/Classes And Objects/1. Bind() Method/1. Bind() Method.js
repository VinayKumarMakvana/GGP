let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function () {

        // Here "this" points to nameObj
        console.log(this.name); 
    }
}

let HiFun = PrintName.sayHi.bind(nameObj);
HiFun();


// ex 2

let NameObj = {
    name: "Tony"
}

let printName = {
    name: "steve",
    SayHi: function () {
        console.log(this.name);
    }
}

Object.prototype.MyBind = function (bindObj) {

    // Here "this" will be sayHi function
    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod();
    }
}
let hiFun = printName.SayHi.MyBind(NameObj);
hiFun();