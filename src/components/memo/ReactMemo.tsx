import React, {ChangeEvent, useEffect, useState} from "react";

interface CounterProps {
    count: number;
}

const Counter = React.memo(({count}: CounterProps) => {
    useEffect(() => {
        console.log("count가 변경되었습니다.");
    });
    return <div>{count}</div>
});

const ReactMemo = () => {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>("");

    const handleText = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("text를 변경하였습니다.")
        setText(e.target.value);
    }

    const handleCount = (cal: string) => {
        if (cal === "+")
            setCount(count + 1);
        else{
            if(count<=0){
                setCount(0);
            }
            else setCount(count-1);
        }
    }

    return (
        <div>
            <Counter count={count}/>
            <button onClick={() => handleCount("+")}>count 증가</button>
            <button onClick={() => handleCount("-")}>count 감소</button>
            <div>
                <input onChange={handleText} value={text}/>
            </div>
        </div>
    )
}

export default ReactMemo