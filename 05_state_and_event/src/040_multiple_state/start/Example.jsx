import { useState } from 'react'

const Example = () => {
    let [ button1, button1Fn] = useState(0);
    let [ button2, button2Fn] = useState(10);
    let [ button3, button3Fn] = useState(100);
    const button1Click = (e) => {
        button1Fn(prev => prev + 1);
    };
    const button2Click = (e) => {
        button2Fn(prev => prev + 1);
    };
    const button3Click = (e) => {
        button3Fn(prev => prev + 1);
    };
    return (
        <>
            <p>ボタンAを{button1}回押しました！</p>
            <button onClick={button1Click}>ボタンA</button>
            <p>ボタンBを{button2}回押しました！</p>
            <button onClick={button2Click}>ボタンA</button>
            <p>ボタンCを{button3}回押しました！</p>
            <button onClick={button3Click}>ボタンA</button>
        </>
    )
};

export default Example;
