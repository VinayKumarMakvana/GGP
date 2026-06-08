let a='GFG'
console.log(`hello \${a}`)


// String Interpolation with Expressions
// String interpolation lets you insert not just variables but also expressions, like math operations or function results, directly into a string.
let x = 5;
let y = 10;
console.log(`The sum of \${x} and \${y} is \${x + y}`);


// Multi-line Strings with Template Literals
// Template literals allow you to create multi-line strings easily without needing escape characters like \n.
const s = `This is a multi-line
string that spans across
several lines.`;
console.log(s);


// Tagged Template Literals
// Tagged template literals allow you to customize how the string is processed, providing more control over string creation.
function greet(strings, name) {
    return `\${strings[0]}\${name.toUpperCase()}\${strings[1]}`;
}

const name = 'gfg';
console.log(greet`Hello, \${name}!`);


// Escaping Backticks and Dollar Signs
// In JavaScript, if you need to include backticks or dollar signs inside template literals, you can escape them using a backslash (\).
const S = `This is a backtick: \` and this is a dollar sign: \\$`;
console.log(S);


// JavaScript Template Literals

// 1. Multi-line Strings
const poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!`;
console.log(poem);

// 2. Dynamic Expressions
const B = 5, C = 10;
const result = `Sum of \${B} and \${C} is \${B + C}.`;
console.log(result);

// 3. Tagged Templates
function tag(strings, ...values) {
    return strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
}
const output = tag`Hello, \${"Elis"}!`;
console.log(output);

// 4. HTML Template
const title = "Welcome";
const html = `<h1>\${title}</h1>`;
console.log(html);

// 5. Conditionals in Templates
const isAdmin = true;
const userRole = `User role: \${isAdmin ? "Admin" : "Guest"}.`;
console.log(userRole);

// 6. Loops with Templates
const items = ["apple", "banana", "cherry"];
const list = `Items:${items.map(item => `\n- ${item}`).join("")}`;
console.log(list);

//7. Embedding Functions
const toUpper = str => str.toUpperCase();
const X = `Shouting: \${toUpper("hello")}`;
console.log(X);