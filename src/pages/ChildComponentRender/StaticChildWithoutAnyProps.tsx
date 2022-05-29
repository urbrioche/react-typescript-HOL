const renderHistory: string[] = [];
const idGenerator = (initial: number) => {
    return () => {
        return initial++;
    };
};

const generateId = idGenerator(1);
// 這個component只要parent component re-render就會跟著re-render
export const StaticChildWithoutAnyProps = () => {
    renderHistory.push(`${generateId()}. 進入這個Child Component: ${new Date().toJSON()}`);
    console.log(1);
    return <>
        <div style={{border: '1px solid black', width: '800px', marginTop: '20px', padding: '10px'}}>
            <h3>這是不含任何Props的Child Component</h3>
            <div>下面會顯示render記錄</div>
            <div style={{color: 'blue'}}>
                {renderHistory.map((h, i) => <div key={i} style={{margin: '10px 0'}}>{h}</div>)}
            </div>
        </div>
    </>;
};