import React, {useRef} from "react";

const UseRef = () => {
    const intervalRef: React.MutableRefObject<number> = useRef<number>(0);  // ref initialValue로 초기화

    const changeCurrent = () => {
        intervalRef.current=intervalRef.current+1;      // current 변경
        console.log(intervalRef.current)                // current 변경 확인
    }

    return(
        <div>
            <button onClick={changeCurrent}>Ref 변경</button>
        </div>
    )
}

export default UseRef