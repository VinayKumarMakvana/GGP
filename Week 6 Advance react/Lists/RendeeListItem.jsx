// 1. Using Array.map()

// Array.map() function
import React from 'react';

const arrayList = ['List Item 1', 'List Item 2', 'List Item 3'];

const UsingArrayMap = () => (
    <div>
        {
            arrayList.map((item, index) => (
                <div key={index}>{item}</div>
            ))
        }
    </div>
);

const App = () => (
    <div>
        <h2>Using Array.map()</h2>
        <UsingArrayMap />
    </div>
);

// 2. Using for loop

// USING for Loop

const arrayList = ['List Item 1', 'List Item 2', 'List Item 3'];

const UsingForLoop = () => {
    const arrayListComponents = [];
    for (let i = 0; i < arrayList.length; i++) {
        arrayListComponents.push(<div key={i}>{arrayList[i]}</div>);
    }
    return <div>{arrayListComponents}</div>;
};

const App = () => (
  <div>
    <h2>Using for loop</h2>
    <UsingForLoop />
  </div>
);

// 3. Using Array.forEach()

const arrayList =
    ['List Item 1', 'List Item 2', 'List Item 3'];

const UsingArrayForEach = () => {
    const arrayListComponents = [];
    arrayList.forEach(
        (item, index) => {
            arrayListComponents.push(
                <div key={index}>
                    {item}
                </div>
            );
        }
    );
    return <div>{arrayListComponents}</div>;
};

const App = () => (
    <div>
        <h2>
            Using Array.forEach()
        </h2>
        <UsingArrayForEach />
    </div>
);

// 4. Using React.Children.map()

const arrayList = ['List Item 1', 'List Item 2', 'List Item 3'];

const UsingReactChildrenMap = ({ children }) => {
    const modifiedChildren =
        React.Children.map(children, (child, index) => (
            <div key={index}>Modified {child}</div>
        ));
    return <div>{modifiedChildren}</div>;
};

const App = () => (
    <div>
        <h2>
            Using React.Children.map()
        </h2>
        <UsingReactChildrenMap>
            <div style={
                {
                    display: 'inline-block',
                    marginRight: '10px'
                }}>
                {arrayList[0]}
            </div>
            <div style={
                {
                    display: 'inline-block',
                    marginRight: '10px'
                }}>
                {arrayList[1]}
            </div>
            <div style={
                {
                    display: 'inline-block',
                    marginRight: '10px'
                }}>
                {arrayList[2]}
            </div>
        </UsingReactChildrenMap>
    </div>
);

// 5. Using map() and JSX Spread Attributes


const araayListWithProps = [
    {
        id: 1,
        name: 'Item 1',
        color: 'lightcoral'
    },
    {
        id: 2,
        name: 'Item 2',
        color: 'cadetblue'
    },
    {
        id: 3,
        name: 'Item 3',
        color: 'cyan'
    }
];

const ArrayListComponent = ({ name, color }) => (
    <div style={
        {
            backgroundColor: color,
            padding: '5px',
            margin: '5px',
            color: 'white'
        }
    }>
        {name}
    </div>
);

const App = () => (
    <div>
        <h2>
            Using map() with JSX Spread Props
        </h2>
        {
            araayListWithProps.map(item => (
                <ArrayListComponent
                    key={item.id} {...item} />
            ))
        }
    </div>
);

export default App;