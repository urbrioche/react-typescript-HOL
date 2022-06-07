import {ReactNode, useState} from "react";

// reference: https://overreacted.io/before-you-memo/
// Solution 2: Lift Content Up
export default function App() {
    // let [color, setColor] = useState("red");
    // 這裡的color放在div中，無法像solution1那樣處理 
    return (
        // <div style={{color}}>
        //     <input value={color} onChange={(e) => setColor(e.target.value)}/>
        //     <p>Hello, world!</p>
        //     <ExpensiveTree/>
        // </div>
        <>
            <ColorPicker>
                <p>Hello, world!</p>
                <ExpensiveTree/>
            </ColorPicker>
        </>
    );
}

// children typescript處理方式
// https://www.carlrippon.com/react-children-with-typescript/
function ColorPicker({children}: { children: ReactNode }) {
    let [color, setColor] = useState("red");
    return (
        <div style={{color}}>
            <input value={color} onChange={(e) => setColor(e.target.value)}/>
            {children}
        </div>
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
