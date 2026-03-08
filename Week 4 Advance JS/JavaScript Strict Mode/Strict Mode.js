// ----- Enabling Strict Mode in Global and Function Scope-----

// Enabling strict mode for global environment
"use strict";
undeclared = 20; 
console.log(undeclared);

// Enabling strict mode inside functions
function printValue() {
    "use strict"; 
    
    let x = 10;
    undeclared = 20; 
    console.log(x);
}
printValue();

// ----- Use Cases for Strict Mode -----
// 1. Eliminating Silent Errors
"use strict";
x = 10;

// 2. Disallowing with Statement
// "Use strict";
// with (Math) {
//     let x = cos(2);
// }


// 3. Securing this in Functions
"use strict";
function printValue() {
    console.log(this);
}
printValue();

// 4. Preventing Writing to Read-Only Properties
"use strict";
const obj = Object.freeze({ prop: 42 });
obj.prop = 50;

// 5. Preventing eval from Creating Variables
"use strict";
eval("var x = 10;");
console.log(x);


// 6. Disallowing delete on Non-Configurable Properties
"use strict";
const obj = {};
Object.defineProperty(obj, "prop", { value: 10, configurable: false});
delete obj.prop;  
console.log(obj)

