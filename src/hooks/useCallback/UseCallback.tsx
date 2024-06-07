import React, {useState} from "react";

const UseCallback = () => {

    const [userCnt, setUserCnt] = useState<string>("");

    const handleUser = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserCnt(e.target.value);
    }

    const setPrintLog = () => {
        console.log(`유저 수 : ${userCnt}명 입니다.`);
    }

    return (
        <div>
            <b>유저 수</b><input type={"number"} onChange={handleUser} value={userCnt}/>
            <button onClick={setPrintLog}>Print Log</button>
        </div>
    )
}

export default UseCallback