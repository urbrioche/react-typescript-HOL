import { useState } from "react";

// reference: https://overreacted.io/before-you-memo/
export default function App() {
    let [color, setColor] = useState("red");
    // 改變顏色會造成ExpensiveTree re-render，整個畫面頓，沒感覺的話，改一下expensive tree的數字
    return (
        <>
            <input value={color} onChange={(e) => setColor(e.target.value)} />
            <p style={{ color }}>Hello, world!</p>
            <ExpensiveTree />
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
