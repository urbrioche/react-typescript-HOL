import {useState} from "react";

// reference: https://overreacted.io/before-you-memo/
// Solution 1: Move State Down
export default function App() {
    // let [color, setColor] = useState("red");
    return (
        <>
            {/*<input value={color} onChange={(e) => setColor(e.target.value)}/>*/}
            {/*<p style={{color}}>Hello, world!</p>*/}
            <Form/>
            <ExpensiveTree/>
        </>
    );
}

function Form() {
    let [color, setColor] = useState("red");
    return (
        <>
            <input value={color} onChange={(e) => setColor(e.target.value)}/>
            <p style={{color}}>Hello, world!</p>
        </>
    );
}

function ExpensiveTree() {
    let now = performance.now();
    while (performance.now() - now < 500) {
        // Artificial delay -- do nothing for 500ms
    }
    console.log('render ExpensiveTree');
    return <p>I am a very slow component tree.</p>;
}
