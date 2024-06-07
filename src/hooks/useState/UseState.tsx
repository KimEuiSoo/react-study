import React, { useState } from "react";

const UseState = () => {
    const weather: string[]  = ["맑음", "흐림", "비 내림"];
    const [value, setValue] = useState<number>(0);

    const plus = () => {
        setValue((prevValue) => (prevValue + 1) % 3);
    }

    console.log(`날씨 : ${weather[value]}`);

    return (
        <div>
            <h1><b>현재 날씨는 {weather[value]}</b></h1>
            <button onClick={plus}>변경</button>
        </div>
    );
}

export default UseState