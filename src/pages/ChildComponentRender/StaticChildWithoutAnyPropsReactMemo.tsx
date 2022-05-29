import {memo} from "react";

const renderHistory: string[] = [];
const idGenerator = (initial: number) => {
    return () => {
        return initial++;
    };
};

const generateId = idGenerator(1);

// 這個component因為有用memo包住，且沒有接受任何的props，因此只會render一次
const StaticChildWithoutAnyPropsReactMemo = () => {
    renderHistory.push(`${generateId()}. 進入這個Child Component: ${new Date().toJSON()}`);

    return <>
        <div style={{border: '1px solid black', width: '800px', marginTop: '20px', padding: '10px'}}>
            <h3>這是不含任何Props的Child Component，但用react memo包起來</h3>
            <div>下面會顯示render記錄</div>
            <div style={{color: 'blue'}}>
                {renderHistory.map((h, i) => <div key={i} style={{margin: '10px 0'}}>{h}</div>)}
            </div>
        </div>
    </>;
};

export default memo(StaticChildWithoutAnyPropsReactMemo);