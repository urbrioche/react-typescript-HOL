import {ChangeEvent, useState} from "react";
import {StaticChildWithoutAnyProps} from "./StaticChildWithoutAnyProps";
import StaticChildWithoutAnyPropsReactMemo from "./StaticChildWithoutAnyPropsReactMemo";

const idGenerator = (initial: number) => {
    return () => {
        return initial++;
    };
};

const generateId = idGenerator(1);


const renderHistory: string[] = [];
const ChildComponentRender = () => {
    const [text, setText] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    renderHistory.push(`${generateId()}. 進入此頁面: ${new Date().toJSON()}`);

    return <>
        <div>
            <h2>研究Child Componet Re-Render</h2>
            <div style={{color: '#1100ff', fontWeight: 'bold'}}>在文字方塊輸入任意文字，觀察本頁面所有元件渲染的情形</div>
            <div><input placeholder="輸入任意文字，並且會觸發onChange時間" onChange={handleChange}/></div>
            <div>你輸入的文字是: {text}</div>
            <div style={{border: '1px solid black', width: '800px', marginTop: '20px', padding: '10px'}}>
                <div>下面會顯示render記錄</div>
                <div style={{color: 'blue'}}>
                    {renderHistory.map((h, i) => <div key={i} style={{margin: '10px 0'}}>{h}</div>)}
                </div>
            </div>
            <StaticChildWithoutAnyProps/>
            <StaticChildWithoutAnyPropsReactMemo/>
        </div>
    </>;
};

export default ChildComponentRender;

