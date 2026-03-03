function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); // Accessing parent's scope
    }
    inner();
}
outer();

//Different cases of scope

let globalLet = "This is a global variable";
{
    let localLet = "This is a local variable";
     // This is a global variable
    console.log(globalLet);
    
    // This is a local variable
    console.log(localLet);   
}