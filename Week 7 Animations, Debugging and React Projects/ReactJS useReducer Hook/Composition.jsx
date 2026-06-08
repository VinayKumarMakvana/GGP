import React from "react";

const Header = () => <header><h1>Welcome to My Website</h1></header>;
const Content = () => <main><p>This is the main content section.</p></main>;
const Footer = () => <footer><p>© 2024 My Website</p></footer>;

const App = () => {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default App;