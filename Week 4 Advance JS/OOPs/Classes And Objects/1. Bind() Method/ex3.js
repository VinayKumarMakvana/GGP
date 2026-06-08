let nameObj={
    name:"Tony"
}

let PrintName={
    name:"steve",
    sayHi:function(){
        console.log(this.name);
    }
}

Object.prototype.MyBind=function(bindObj) {

    // Here "this" will be sayHi function
    bindObj.myMethod=this; 
    console.log("bindObj ->",bindObj);
    return function(){
        bindObj.myMethod();
    }
}
let HiFun=PrintName.sayHi.MyBind(nameObj);