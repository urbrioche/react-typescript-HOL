import {useEffect, useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    useEffect(() => {
        setCount(count + 1);
        setCount(count + 1);
        // 這個範例是故意這樣寫
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setCount1(prev => prev + 1);
        setCount1(prev => prev + 1);
    }, []);

    return <>
        <h2>useState 經典範例</h2>
        <h3>預期結果:2</h3>
        <div>
            錯誤<br/>
            setCount(count + 1);<br/>
            setCount(count + 1);<br/>
        </div>
        <div style={{paddingTop: '5px'}}>
            Count = {count}
        </div>
        <hr/>
        <div>
            正確作法 <br/>
            setCount1(prev =&gt; prev + 1); <br/>
            setCount1(prev =&gt; prev + 1); <br/>
        </div>
        <div style={{paddingTop: '5px'}}>
            Count1 = {count1}
        </div>
    </>;
};

export default Counter;