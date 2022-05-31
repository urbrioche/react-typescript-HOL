import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Counter from "./pages/Counter";
import CounterRedux from "./pages/CounterRedux/Counter";
import ChildComponentRender from "./pages/ChildComponentRender";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/counter-redux" element={<CounterRedux/>}/>
                <Route path="/child-component-render" element={<ChildComponentRender/>}/>
            </Routes>
        </BrowserRouter>
    </>;
};

export default App;
