import React, {useRef} from "react";

const UseRef3 = () => {
    // 초기값 null인 inputRef라는 ref 객체 선언
    const inputRef = useRef<HTMLInputElement>(null);

    // handleFocus라는 메소드를 통해서 DOM 노드 <input>에 접근해 focus()와 같은 빌트인 브라우저 API를 사용
    const handleFocus = () => {
        inputRef.current?.focus();
    }

    // DOM 노드 <input>에 접근해 ref 속성에 ref 객체 전달
    return(
        <div>
            <input ref={inputRef}/>
            <button onClick={handleFocus}>
                Focus input
            </button>
        </div>
    )
}

export default UseRef3