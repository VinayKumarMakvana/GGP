function App() {
    const items = ['Apple', 'Banana', 'Cherry'];

    return (
        <div>
            <h1>My Fruit List</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}



// * List with Objects

const users = [
    { id: 1, name: 'Geeks', age: 30 },
    { id: 2, name: 'for', age: 25 },
    { id: 3, name: 'Geeks', age: 20 },
];
const App = () => {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} is {user.age} years old.
                </li>
            ))}
        </ul>
    );
}



// * Conditional Rendering in Lists


const App = () => {
    const users = [
        { id: 1, name: 'geeks', age: 30 },
        { id: 2, name: 'for', age: 25 },
        { id: 3, name: 'geeks', age: 35 },
    ];
    return (
        <ul>
            {users.map((user) => (
                user.age > 30 ? (
                    <li key={user.id}>{user.name} is over 30 years old</li>
                ) : (
                    <li key={user.id}>{user.name} is under 30 years old</li>
                )
            ))}
        </ul>
    );
};


// * List with a Click Event

const App = () => {
    const COMPANY = ["GEEKS", "FOR", "GEEKS"];
    const handleClick = (COMPANY) => {
        alert(`You clicked on \${COMPANY}`);
    };

    return (
        <ul>
            {COMPANY.map((COMPANY, index) => (
                <button key={index} onClick={() => handleClick(COMPANY)}>
                    {COMPANY}
                </button>
            ))}
        </ul>
    );
};
export default App;
