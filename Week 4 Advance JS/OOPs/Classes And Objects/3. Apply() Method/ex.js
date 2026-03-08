let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (...age) {
        console.log(this.name + " age is " + age);
    }
}
PrintName.sayHi.apply(nameObj, [42]);