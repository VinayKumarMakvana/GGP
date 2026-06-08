// Keys with Components

import React from "react";
import ReactDOM from "react-dom/client";

// Component to be extracted
function MenuItems(props) {
	const item = props.item;
	return <li key={item.toString()}>{item}</li>;
}

// Component that will return an
// unordered list
function Navmenu(props) {
	const list = props.menuitems;
	const updatedList = list.map((listItems) => {
	return <MenuItems item={listItems} />; // Key is missing here
	});

	return <ul>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Navmenu menuitems={menuItems} />
	</React.StrictMode>
);


// Correct usage of keys

import React from "react";
import ReactDOM from "react-dom";
// Component to be extracted
function MenuItems(props) {
    const item = props.item;
    return <li>{item}</li>;
}

// Component that will return an
// unordered list
function Navmenu(props) {
    const list = props.menuitems;
    const updatedList = list.map((listItems) => {
        return <MenuItems key={listItems.toString()} item={listItems} />;
    });

    return <ul>{updatedList}</ul>;
}

const menuItems = [1, 2, 3, 4, 5];

ReactDOM.render(
    <Navmenu menuitems={menuItems} />,
    document.getElementById("root")
);


// Uniqueness of Keys

import React from "react";
import ReactDOM from "react-dom";
// Component to be extracted
function MenuItems(props) {
    const item = props.item;
    return <li>{item}</li>;
}

// Component that will return an
// unordered list
function Navmenu(props) {
    const list = props.menuitems;
    const updatedList = list.map((listItems) => {
        return <MenuItems key={listItems.toString()} item={listItems} />;
    });

    return <ul>{updatedList}</ul>;
}

const menuItems1 = [1, 2, 3, 4, 5];
const menuItems2 = [1, 2, 3, 4, 5, 6];

ReactDOM.render(
    <div>
        <Navmenu menuitems={menuItems1} />
        <Navmenu menuitems={menuItems2} />
    </div>,
    document.getElementById("root")
);