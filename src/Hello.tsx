import {ChangeEvent, useEffect, useState} from "react";

const generateId = (() => {
    let initValue = 0;
    return () => {
        initValue += 1;
        return initValue;
    }
})()

const Hello = () => {
    const [username, setUsername] = useState('Jerry');
    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const sayHello = () => {
        // console.log("Hello, " + username);
        setUsername('cc' + generateId());
        console.log("Hello,");
    }

    useEffect(() => {
        const id = generateId();
        console.log(`(每次) 進入Effect${id}`)

        return () => {
            console.log(`(每次) 離開Effect${id}`);
        }
    });

    useEffect(() => {
        const id = generateId();
        console.log(`${username} 進入Effect${id}`)

        return () => {
            console.log(`${username} 離開Effect${id}`);
        }
    }, [username]);

    useEffect(() => {
        sayHello();
    }, [sayHello]);

    // useEffect(() => {
    //     const id = generateId();
    //     console.log(`進入Effect${id}`)
    //
    //     return () => {
    //         console.log(`離開Effect${id}`);
    //     }
    // }, []);
    // console.log('進入render前');
    return (
        <>
            {console.log('進入render')}
            {sayHello()}
            <div>
                <input value={username} onChange={handleUsernameChange}/>
                <div>
                    Hello, {username}
                </div>
            </div>
        </>)
}

export default Hello;