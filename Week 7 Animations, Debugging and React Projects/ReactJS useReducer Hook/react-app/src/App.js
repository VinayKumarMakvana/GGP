//App.js
import React from 'react';
import Greeting from './components/Greeting';
import Button from './components/Button';
import UserProfile from './components/UserProfile';

const App = () => {
    const user = { name: 'Ben', age: 25, email: 'gfg@example.com' };

    return (
        <div>
            <Greeting name="GFG" age={22} />
            <Button label="Click Me" type="primary" />
            <UserProfile user={user} />
        </div>
    );
};

export default App;